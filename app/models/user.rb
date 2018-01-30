class User < ApplicationRecord
  validates :email, uniqueness: true
  validate :oauth_or_email
  after_initialize :ensure_session_token

  def password
    @password ||= BCrypt::Password.new(self.password_digest)
  end

  def oauth_or_email
    if self.uid == nil && (self.email.nil? || self.email.length == 0)
      errors.add :base, 'please enter email or log in with facebook'
    elsif self.uid == nil && (self.email.nil? || self.email.length != 0) && (self.password.nil? || self.password.length < 8)
      errors.add :base, "password has to be longer than 7 characters"
    end
  end

  def self.sign_in_from_omniauth(auth)
    user = find_by(provider: auth['provider'], uid: auth['uid'])
    unless user
      user = User.create(provider: auth['provider'], uid: auth['uid'], name: auth['info']['name'])
      user.save
    end
    user
  end


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end

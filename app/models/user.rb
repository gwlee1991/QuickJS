class User < ApplicationRecord
  validates :email, uniqueness: true
  validate :oauth_or_email
  validate :password_if_email_entered
  after_initialize :ensure_session_token

  attr_reader :password

  def oauth_or_email
    unless [:uid, :email].any?{ |val| val.present? }
      errors.add :base, 'either sign in with facebook or enter email'
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

  def password_if_email_entered
    if :email && :password.length < 8
      errors.add :base, 'password has to be longer than 7 characters'
    end
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

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  private

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user ||= User.find_by_session_token(session[:session_token])
    end
    p @current_user
  end

  def signed_in?
    !!current_user
  end

  helper_method :current_user, :signed_in?
end

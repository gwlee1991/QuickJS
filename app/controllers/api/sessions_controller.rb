class Api::SessionsController < ApplicationController

  def create
    auth = request.env["omniauth.auth"]
    if auth
      session[:omniauth] = auth.except('extra')
      @user = User.sign_in_from_omniauth(auth)
      session[:user_id] = @user.id
      redirect_to root_url
    else
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        session[:session_token] = @user.session_token
        render "/api/users/show.json.jbuilder"
      else
        render json: ["Invalid email or password"], status: 410
      end
    end
  end

  def destroy
    @user = current_user
    if @user
      @user.reset_session_token!
      if session[:session_token]
        session[:session_token] = nil
      elsif session[:omniauth]
        session[:user_id] = nil
        session[:omniauth] = nil
      end
      render "/api/users/show.json.jbuilder"
    else
      render json: ["not signed in"], status: 404
    end
  end


end

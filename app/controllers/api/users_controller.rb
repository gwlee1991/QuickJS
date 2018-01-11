class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    # if @user.email == ""
    #   @user.errors.add :base, 'please enter email or log in with facebook'
    #   render json: @user.errors.full_messages, status: 422
    if @user.save
      session[:session_token] = @user.session_token
      render "api/users/show.json.jbuilder"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end

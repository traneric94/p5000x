class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @photos = Photo.find_by(author_id: @user.id)
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :image,
      :fName,
      :lName
    )
  end

end

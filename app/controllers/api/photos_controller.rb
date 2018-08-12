class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.find_by_user_id(params[:user_id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author = current_user
    unless @photo.save
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end


  def update
    @photo = Photo.find(params[:id])
    unless @photo && @photo.update_attributes(photo_params)
      render json: @photo.errors.full_messages, status: 400
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo ? @photo.destroy :
    (render json: ['Photo does not exist'], status: 410)

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :author_id)
  end

end

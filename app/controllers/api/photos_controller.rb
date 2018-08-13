class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def create
    print "84320423890"
    @photo = Photo.new(photo_params)
    if @photo.save
      render show
    else
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
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :author_id)
  end

end

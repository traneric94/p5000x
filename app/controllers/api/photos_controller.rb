class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def show

  end

  def create
  end

  def update
  end
  

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :author_id)
  end

end

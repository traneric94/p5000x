json.photo do
  json.partial! 'photo', photo: @photo
  json.photoUrl url_for(photo.image)
  json.photoPublicUrl photo.image.service_url

  json.author do
    json.username @photo.author.username
  end
end

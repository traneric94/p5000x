json.photo do
  json.partial!('api/photos/photo', photo: @photo)
  json.author do
    json.username @photo.author.username
  end
end

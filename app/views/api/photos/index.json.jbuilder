@photos.each do |photo|
  json.set! photo.id do
    json.partial!('api/photos/photo', photo: @photo)
    json.author photo.author.username
  end
end

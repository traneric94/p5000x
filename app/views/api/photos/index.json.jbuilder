@photos.each do |photo|
  puts photo
  puts photo.id
  json.set! photo.id do
    json.partial! 'photo', photo: photo
    json.author_id photo.author_id
    json.photoUrl url_for(photo.image)

  end

end

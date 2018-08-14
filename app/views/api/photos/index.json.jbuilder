@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
    json.author User.find(photo.author_id).username
    json.photoUrl url_for(photo.image)
  end
end

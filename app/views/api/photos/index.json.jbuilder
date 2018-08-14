@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :description, :title
    json.author User.find(photo.author_id).username
    json.photoUrl url_for(photo.image)
  end
end

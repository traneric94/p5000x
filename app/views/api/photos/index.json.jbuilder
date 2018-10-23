@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :description, :title
    json.author User.find(photo.author_id).username
    json.photoUrl url_for(photo.image)
    json.photoPublicUrl photo.image.service_url
  end
end

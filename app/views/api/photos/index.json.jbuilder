json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description, :author_id
  json.photoUrl url_for(photo.image)
end

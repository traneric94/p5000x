json.extract! user, :id, :username
json.profileUrl url_for(user.image)

json.photos user.photos do |photo|
    json.extract! photo, :id, :author_id, :description, :title
    json.photoUrl url_for(photo.image)
end
json.extract! user, :id, :username
json.photos user.photos do |photo|
    json.photoUrl url_for(photo.image)
end
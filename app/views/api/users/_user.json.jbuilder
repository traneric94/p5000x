json.extract! user, :id, :username, :email
  json.photos user.photos.pluck(:id)

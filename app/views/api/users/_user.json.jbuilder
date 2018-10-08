json.extract! user, :id, :username, :email, :fName, :lName
json.profileUrl url_for(user.image)
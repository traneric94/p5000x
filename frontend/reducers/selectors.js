export const getAllPhotos = ({ photos }) => (
  Object.keys(photos).map(id => photos[id])
);

export const getOwnPhotos = ({ entities, session }) => {
  if (session.currentUser == null) return []
    let result = Object.values(entities.photos).filter(
      (photo) => {
        return photo.author_id == session.currentUser.id;
      }
    )
    return result;
}

export const getOtherUsers = ({ entities, session }) => {
  let result = Object.values(entities.users).filter((user) => {
    return user.id != session.currentUser.id;
  })
  return result;
}

export const getFollowedUsers = (state) => {
  let result = [];
  return result;
}
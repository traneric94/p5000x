export const getAllPhotos = ({ photos }) => (
  Object.keys(photos).map(id => photos[id])
);

export const getOwnPhotos = ({ entities, session }) => {
    let result = Object.values(entities.photos).filter(
      (photo) => {
        return photo.author_id == session.currentUser.id;
      }
    )
    return result;
}

export const getOwnPhotos1 = (photos, currentUser) => {
  let result = Object.values(photos).filter(
    (photo) => {
      return photo.author_id == currentUser.id;
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
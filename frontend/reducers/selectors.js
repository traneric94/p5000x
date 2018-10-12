export const getUserPhotos = ({ entities }, userId) => {
    let result = Object.values(entities.photos).filter(
      (photo) => {
        return photo.author_id == userId;
      }
    )
    return result;
}

export const getMappedUser = ({entities}, username) => {
  return Object.values(entities.users).find(
    user => (user.username === username)
  );
}

export const getOtherPhotos = ({ entities, session }) => {
  if (session.currentUser == null) return [];
  let result = Object.values(entities.photos).filter(
    (photo) => {
      return photo.author_id !== session.currentUser.id;
    }
  )
  return result;
}

export const getOtherUsers = ({ entities, session }) => {
  let result = Object.values(entities.users).filter(user => {
    return user.id != session.currentUser.id;
  });
  return result;
};

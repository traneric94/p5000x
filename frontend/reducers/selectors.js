export const getAllPhotos = ({ photos }) => (
  Object.keys(photos).map(id => photos[id])
);

export const getOwnPhotos = ({ entities, session }) => {
    let result = Object.values(entities.photos).filter(
      (photo) => {
        return photo.author_id == session.currentUser.id
      }
    )
    return result
}

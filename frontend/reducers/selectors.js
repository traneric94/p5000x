export const getAllPhotos = ({ photos }) => (
  Object.keys(photos).map(id => photos[id])
);

export const getOwnPhotos = ({ photos, filter }) => {
    let result = [];
    for (let id in photos) {
      if (photos[id].author_id === filter) {
        result.push(photos[id])
      }
    }
    return result;
}

export const getPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);

export const getPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photo.id}`,
    data: { photo }
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${id}`
  })
);

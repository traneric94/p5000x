export const getPhotos = (page) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos`,
    data: { page } 
  })
);

export const getPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  })
);

export const createPhoto = (data) => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: data,
    contentType: false,
    processData: false
  })
)

export const updatePhoto = (data, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${id}`,
    data: data,
    contentType: false,
    processData: false,
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${id}`
  })
);

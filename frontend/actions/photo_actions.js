import * as PhotoAPIUtil form '../util/user_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = photos => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const photoIndex = () => dispatch => (
  PhotoAPIUtil.getPhotos().then(
    photos => (
      dispatch(receivePhotos(photos))
    ),
    err => (
      dispatch(receiveErrors(err.response.JSON))
    )
  )
);

export const getPhoto = (id) => dispatch => (
  PhotoAPIUtil.getPhoto(id).then(
    photo => (
      dispatch(receivePhoto(photo))
    ),
    err => (
      dispatch(receiveErrors(err.response.JSON))
    )
  )
);

export const updatePhoto = (photo) => dispatch => (
  PhotoAPIUtil.updatePhoto(photo).then(
    photo => dispatch(receivePhoto(photo))
  )
);

export const deletePhoto = (id) => dispatch => (
  PhotoAPIUtil.deletePhoto(id).then(
    photo => dispatch(receivePhoto)
  )
)

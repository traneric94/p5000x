import * as PhotoAPIUtil from '../util/photo_util';
import * as Loading from './loading_actions';
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const receivePhotos = photos => ({ type: RECEIVE_PHOTOS, photos });
const receivePhoto = photo => ({ type: RECEIVE_PHOTO, photo });
const removePhoto = (id) => ({ type: REMOVE_PHOTO, id })
const receiveErrors = errors => ({ type: RECEIVE_PHOTO_ERRORS, errors });



export const getPhotos = () => dispatch => {
  dispatch(Loading.startLoading());
  
  return PhotoAPIUtil.getPhotos().then( 
    photos => dispatch(receivePhotos(photos))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  };

export const getPhoto = (id) => dispatch => (
  PhotoAPIUtil.getPhoto(id).then(
    photo => dispatch(receivePhoto(photo))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
);

export const createPhoto = (photo) => dispatch => (
  PhotoAPIUtil.createPhoto(photo).then(
    photo => dispatch(receivePhotos(photo))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
);

export const updatePhoto = (photo) => dispatch => (
  PhotoAPIUtil.updatePhoto(photo).then(
    photo => dispatch(receivePhoto(photo))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
);

export const deletePhoto = (id) => dispatch => (
  PhotoAPIUtil.deletePhoto(id).then(
    () => dispatch(removePhoto(id))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
);

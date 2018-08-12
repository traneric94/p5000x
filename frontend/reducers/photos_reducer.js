import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const templatePhoto = Object.freeze({
  title: "",
  author_id: "",
  text: "",
});

const photoReducer = (state = templatePhoto, action )

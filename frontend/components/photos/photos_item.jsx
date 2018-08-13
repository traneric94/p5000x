import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PhotosItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.photo)
    return (
      <div>
        <h1> HELLO </h1>
        <h1>{this.props.photo.id}</h1>
        <h1>{this.props.photo.description}</h1>
        <img src={this.props.photo.photoUrl}></img>
      </div>
    )
  }

}

export default PhotosItem;

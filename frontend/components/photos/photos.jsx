import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotosItem from './photos_item';

class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return (
      <div>
        {
          this.props.photos.map(
            photo => (
              <PhotosItem
                key={photo.id}
                photo={ photo }
              />
            )
          )
        }
      </div>
    );
  }
}

export default Photos;

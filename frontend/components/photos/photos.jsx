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
      <div className="photos-container">
        {
          this.props.photos.map(
            (photo, i) => {
              if (this.props.currentUser && (this.props.location.pathname === "/" ||
                this.props.photos[i].author_id === this.props.currentUser.id)) {
                return  (
                  <PhotosItem
                    key={photo.id}
                    photo={ photo }
                    deletePhoto={this.props.deletePhoto}
                    currentUser={this.props.currentUser}
                  />
                );
              } else {
                return null;
              }
            }
          )
        }
      </div>
    );
  }
}

export default Photos;

import React from 'react';
import PhotosItem from './photos_item';
import LoadingIcon from '../loading/loading_icon';

class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getOwnPhotos, id } = this.props
    getOwnPhotos(id)
  }


  renderPhotos() {
    const { photos, deletePhoto, currentUser } = this.props
    return (
        <div className="photos-container">
          {
            photos.map(
              (photo) => {
                return <PhotosItem 
                key={photo.id} 
                photo={photo} 
                deletePhoto={deletePhoto} 
                currentUser={currentUser}
                />;
              }
            )
          }
        </div>
    )
  }

  renderLoad() {
    if (this.props.loading) {
      return <LoadingIcon />;
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          {this.renderPhotos()}
          {this.renderLoad()}
        </div>
      );
    }
  }
}

export default Photos;

import React from 'react';
import PhotosItem from './photos_item';
import LoadingIcon from '../loading/loading_icon';

class Photos extends React.Component {
  constructor(props) {
    super(props);
 
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  renderPhotos() {

    const {ownPhotos, otherPhotos, deletePhoto, currentUser} = this.props;
    if (this.props.currentUser == null) return null;
    let photoArray = this.props.userId != undefined ? ownPhotos : otherPhotos.slice(110)
    return (
        <div className="photos-container">
          {
            photoArray.map(
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

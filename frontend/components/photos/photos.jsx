import React from 'react';
import { Link } from 'react-router-dom';
import PhotosItem from './photos_item';
import LoadingIcon from '../loading/loading_icon';
import InfiniteScroll from "react-infinite-scroller";

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
    let photoArray = this.props.userId != undefined ? ownPhotos : otherPhotos.slice(50)

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

  render() {

    if (this.props.loading) {
      return <LoadingIcon />;
    }

    if (this.props.currentUser) {
      return (
        <div >
          {this.renderPhotos()}
        </div>
      );
    }
  }
}

export default Photos;

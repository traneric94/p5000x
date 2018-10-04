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
    let photoArray = [];

    if (this.props.currentUser == null) return null;

    if (this.props.view == "profile") {
      photoArray = this.props.ownPhotos;
    } else if (this.props.userId) {
      photoArray = this.props.otherPhotos.filter((el) => {
        el.author_id == this.props.userId;
      });
    } else {
      photoArray = this.props.otherPhotos.slice(50);
    }
    return (
      <div className="photos-container">
        {
          photoArray.map(
            (photo) => {
              return <PhotosItem 
              key={photo.id} 
              photo={photo} 
              deletePhoto={this.props.deletePhoto} 
              currentUser={this.props.currentUser}
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

    if (!this.props.currentUser) {
      return <div className="splash">
          <img className="background-image" src={window.background} />
          <div className="greeting-message">
            <h1>Inspire and share with the world's photographers</h1>
            <br/><br/><br/><br/>
            <Link id="entry-button" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>;
    } else {
      return (
        <div >
          {this.renderPhotos()}
        </div>
      );
    }
  }
}

export default Photos;

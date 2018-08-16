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

// Render filtering here, will need to refactor for scalalability,
// but instant reload atm.
  render() {
    if (!this.props.currentUser) {
      return (
        <div className="splash">
          <img className="background-image" src={window.background}></img>
          <div className="greeting-message">
            <h1> Welcome to 5000px </h1>
            <Link id="entry-button" to="/signup">Sign Up</Link>
          </div>
        </div>
      )
    }
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

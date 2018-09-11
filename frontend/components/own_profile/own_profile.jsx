import React from 'react';
import PhotosItem from '../photos/photos_item';

class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
  } 

  componentDidMount() {
    this.props.getPhotos()
  }

  render() {
    return (
      <div>
        <h1 className="center"> {this.props.currentUser.username} </h1>
        <img className="profile-pic default-profile" src={this.props.currentUser.profileUrl} />
        <h1 className="center"> Your Photos </h1>
        <div className="photos-container">
          {this.props.ownPhotos.map(photo => (
            <PhotosItem
              key={photo.id}
              photo={photo}
              deletePhoto={this.props.deletePhoto}
              currentUser={this.props.currentUser}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OwnProfile;

import React from 'react';
import PhotosItem from '../photos/photos_item';
import ProfileItem from '../profile/profile_item';
class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  componentDidMount() {
    this.props.getPhotos()
  }

  render() {
    console.log(this)
    return (
      <div>
        
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

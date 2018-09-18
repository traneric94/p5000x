import React from 'react';
import PhotosItem from '../photos/photos_item';
import PhotosContainer from '../photos/photos_container';
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
      <div className="profile-container center">
        <img className="default-profile" src={this.props.currentUser.profileUrl}/>
        <div className="profile-information">
          <ul>

            <li><b>Username:</b>   {this.props.currentUser.username}</li>
            <li><b>First Name:</b> {this.props.currentUser.fName}</li>
            <li><b>Last Name:</b>  {this.props.currentUser.lName}</li>
            <li><b>Email:</b>      {this.props.currentUser.email}</li>

          </ul>
        </div>
        
        <h1 className="center"> Your Photos </h1>
        <PhotosContainer view="profile"/>
      </div>
    );
  }
}

export default OwnProfile;

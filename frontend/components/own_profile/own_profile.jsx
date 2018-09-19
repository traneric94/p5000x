import React from 'react';
import PhotosContainer from '../photos/photos_container';
import { timingSafeEqual } from 'crypto';
class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  componentDidMount() {
    this.props.getPhotos()
  }

  renderInfo() {
    const info = { username, fName, lName, email } = this.props.currentUser;
    info.values.map((el) => {
      return <li>`#{el}`</li>
    })
  }

  render() {
    const { username, fName, lName, email } = this.props.currentUser;
    return (
      <div className="profile-container center">
        <img className="default-profile" src={this.props.currentUser.profileUrl}/>
        <div className="profile-information">
          <ul>
        
            <li><b>Username:</b>   {username}</li>
            <li><b>First Name:</b> {fName}</li>
            <li><b>Last Name:</b>  {lName}</li>
            <li><b>Email:</b>      {email}</li>

          </ul>
        </div>
        
        <h1 className="center"> Your Photos </h1>
        <PhotosContainer view="profile"/>
      </div>
    );
  }
}

export default OwnProfile;

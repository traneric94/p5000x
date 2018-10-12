import React from 'react';
import PhotosContainer from '../photos/photos_container';

class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    if (this.props.user === undefined) {
      return null;
    }
    const {
      id,
      username,
      fName,
      lName,
      email,
      profileUrl
    } = this.props.user;
    
     return (
      <div className='profile-container center'>
          <img className='default-profile' src={profileUrl} />
          <div className='profile-information'>
            <ul>
              <li>
                <b>Username:</b> {username}
              </li>
              <li>
                <b>First Name:</b> {fName}
              </li>
              <li>
                <b>Last Name:</b> {lName}
              </li>
              <li>
                <b>Email:</b> {email}
              </li>
            </ul>
          </div>
          <h1 className='center'> Your Photos </h1>
          <PhotosContainer userId={id} />
        </div>
    );
  }
}

export default OwnProfile;

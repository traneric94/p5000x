import React from 'react';
import PhotosItem from '../photos/photos_item';
// import { Link, withRouter } from 'react-router-dom';
// import Modal from 'react-modal';

class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }

  render() {
    console.log(this)

    if (!this.props.user) {return null}

    return (
      <div>
        <h1 className="username"> { this.props.user.username} </h1>
        <img src={this.props.user.profileUrl} />
        <div className="photos-container">
          
        </div>
      </div>
    )
  }

}

export default OwnProfile;

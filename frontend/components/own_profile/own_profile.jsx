import React from 'react';
// import Modal from "react-modal";
import PhotosContainer from '../photos/photos_container';
// import OwnProfileEdit from './own_profile_edit';


// Modal.setAppElement(document.getElementById("root"));


class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modalIsOpen: false,
    //   visible: false
    // };

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  // openModal() {
  //   this.setState({ modalIsOpen: true });
  // }

  // afterOpenModal() {
  //   this.subtitle.style.color = "#foo";
  // }

  // closeModal() {
  //   this.setState({ modalIsOpen: false });
  //   this.setState({ visible: false });
  // }

  render() {
    const {
      username,
      fName,
      lName,
      email,
      profileUrl
    } = this.props.currentUser;
    return (
    <div className="profile-container center">
        <img className="default-profile" src={profileUrl} onClick={this.openModal} />
        <div className="profile-information">
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
        <h1 className="center"> Your Photos </h1>
        <PhotosContainer view="profile" />
      </div>
    );
  }
}

export default OwnProfile;

import React from 'react';
import Modal from 'react-modal';
import PhotosContainer from '../photos/photos_container';


const customStyles = {
  content : {
    'height' : 'fit-content',
    'width'  : 'fit-content',
    'margin' : 'auto',
  }
};

Modal.setAppElement(document.getElementById('root'));

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#foo';
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const {
      id,
      profileUrl,
      username,
      lName,
      fName,
      email
    } = this.props.user
    return <div>
        <div className="profile-item-container">
          <img className="default-profile" src={profileUrl} onClick={this.openModal} />
          <br />
          {username}
        </div>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} ariaHideApp={false}>
          <h1 ref={subtitle => (this.subtitle = subtitle)}>{username}</h1>
          <br />
          <img className="show-profile" src={profileUrl} />
          <br />
          <h2>
            {fName} {lName}
          </h2>
          <h2>{email}</h2>
          <PhotosContainer userId={id} />
        </Modal>
      </div>;
  }
}

export default ProfileItem;

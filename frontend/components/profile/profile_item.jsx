import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ProfileContainer from './profile_container';

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
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    this.subtitle.style.color = '#foo';
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <div className="default-profile" onClick={this.openModal}>
          <img src={window.profile_pic}/>
          <br/>
          {this.props.user.username}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false} >
          <h1 ref={subtitle => this.subtitle = subtitle}>{this.props.user.username}</h1>
          <br/>
          <img src={window.profile_pic}/>
          <br/>
          <button> Follow </button>
        </Modal>
      </div>
    )
  }
}

export default ProfileItem;

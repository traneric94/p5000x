import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';

const customStyles = {
  content : {
    'height' : 'fit-content',
    'width'  : 'fit-content',
    'margin' : 'auto',
  }
};

Modal.setAppElement(document.getElementById('root'));

class PhotosItem extends React.Component {
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
        <img className="default-pic" src={this.props.photo.photoUrl} onClick={this.openModal}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false} >
          <div className="show">
            <div className="open-pic">
              <img src={this.props.photo.photoUrl}/>
            </div>
            <div className="details">
              <h1 ref={subtitle => this.subtitle = subtitle}> {this.props.photo.title} </h1>
              <h2>{this.props.photo.description}</h2>
            </div>
          </div>
        </Modal>
      </div>
    )
  }

}

export default PhotosItem;

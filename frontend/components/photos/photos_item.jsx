import React from 'react';
import Modal from 'react-modal';
import PhotoEditContainer from './photo_edit_container'

const customStyles = {
  content : {

    'margin' : 'auto',
    'overflow' : 'hidden',
    
  }
};

Modal.setAppElement(document.getElementById('root'));

class PhotosItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:  false,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    this.subtitle.style.color = '#foo';
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    document.body.style.overflow = "visible";
    this.setState({ modalIsOpen: false })
    this.setState({ visible: false })
  }

  renderEdit() {
    this.setState({ visible: !this.state.visible})
  }

  toggleEditCancel() {
    return ((this.state.visible) ? (
        <button className="action-button"
          onClick={this.renderEdit.bind(this)}>Cancel
        </button>
      ) : (
        <button className="action-button"
          onClick={this.renderEdit.bind(this)}>Edit
        </button>
      )
    )
  }

  handleDelete() {
    this.props.deletePhoto(this.props.photo.id);
    this.closeModal();
  }

  renderButton() {
    console.log(this.props);
    if (this.props.currentUser.id === this.props.photo.author_id) {
      return (
        <div className={this.state.visible ? "editing" : "form-buttons"}>
          {this.toggleEditCancel()}
          <button
            className="action-button"
            id="delete"
            onClick={this.handleDelete.bind(this)}>Delete
            </button>
        </div>
      )
    } else {
      return (null)
    }
  }

  renderDisplay() {
    return (
      this.state.visible ? (
        <div className="photo-edit-container">
          <button id="button-close" className="action-button" onClick={this.closeModal}> X </button>
          <PhotoEditContainer
            photo={this.props.photo}
            closeModal={this.closeModal}
          />
          {this.renderButton()}
        </div>
      ) : (
          <div className="show">
            <button id="button-close" className="action-button" onClick={this.closeModal}> X </button>
            <img className="open-pic" src={this.props.photo.photoUrl} />
            <div className="details">
              <h1 ref={subtitle => this.subtitle = subtitle}>
                {this.props.photo.title} </h1>
              <h2>{this.props.photo.description}</h2>
              {this.renderButton()}
            </div>
          </div>
        )
    );
  }

  render() {
    return (
      <div className="default-pic-container">
        <img
          className="default-pic"
          src={this.props.photo.photoUrl}
          onClick={this.openModal} 
          title={this.props.photo.title}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false} >
          {this.renderDisplay()}
        </Modal>
      </div>
    )
  }
}

export default PhotosItem;

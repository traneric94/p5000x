import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("thisform", this)
    this.state = this.props.operation == 'create' ? ({
      title: "",
      photoFile: null,
      preview: null,
      description: "",
      editing: false
    }) : ({ 
      title: this.props.photo.title,
      photoFile: null,
      preview: this.props.photo.photoUrl,
      description: this.props.photo.description,
      id: this.props.photo.id,
      editing: true
    })
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);

    if (this.state.photoFile) {
      formData.append('photo[image]', this.state.photoFile);
    }

    if (this.state.editing) {
      formData.append('photo[id]', this.state.id);
      this.props.updatePhoto(formData);
    } else {
      formData.append('photo[author_id]', this.props.currentUser.id);
      this.props.createPhoto(formData);
    }

    this.props.closeModal();
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  handleFile(e) {
    this.setState({ preview: URL.createObjectURL(e.currentTarget.files[0])})
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  renderErrors() {

    if (this.props.errors.photoErrors && 
      this.props.errors.photoErrors.length != 0) {
      return (
        <ul className="error-list">
          {this.props.errors.photoErrors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      );
    } else {
      return (null);
    }
  }

  renderDelete() {
    if (this.state.editing) {
      return (
        <button
          id="delete"
          className="action-button"
          value="Delete Photo"
        > Delete Photo </button> 
      )
    };
    return null;
  }



  render() {
    console.log(this.state)

    const disabled = (!this.state.editing && this.state.photoFile == null || this.state.title == "")
    return (
      <div>
        <form
          className="upload-form-container"
          onSubmit={this.handleSubmit.bind(this)}
        >
        <div className="upload-photo">
          <label className="action-button"> Select Photo
            <input type="file"
             onChange={this.handleFile.bind(this)} />
          </label>
          <br/><br/>
          <img className="preview-pic" src={this.state.preview}/>
          {this.renderDelete()}

        </div>
        {this.renderErrors()}
          <div className="input-details">
            <label> Title
              <br/>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                ></input>
            </label>
            <br/><br/>
            <label htmlFor="photo-description"> Description
              <br/><br/>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}></textarea>
            </label>
            <br/>
            <br/>
            <input
              id="main-upload"
              className="upload button-primary"
              type="submit"
              value={this.state.editing ? "Update Photo" : "Upload Photo"}
              disabled={(disabled) ? "disabled" : ""}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoForm;

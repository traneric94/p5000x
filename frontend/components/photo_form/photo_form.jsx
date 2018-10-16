import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      preview: null,
      description: "",
    }
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[author_id]', this.props.currentUser.id);
    if (this.state.photoFile) {
      formData.append('photo[image]', this.state.photoFile);
    }
    this.props.createPhoto(formData);
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

    if (this.props.errors.photoErrors && this.props.errors.photoErrors.length != 0) {
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

  render() {

    const disabled = (this.state.photoFile == null || this.state.title == "")
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
              value="Upload Photo"
              disabled={(disabled) ? "disabled" : ""}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoForm;

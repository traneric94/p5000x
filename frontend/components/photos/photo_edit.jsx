import React from 'react';

class PhotoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.photo.title,
      photoFile: null,
      preview: this.props.photo.photoUrl,
      description: this.props.photo.description,
      id: this.props.photo.id
    }
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[id]', this.state.id);
    if (this.state.photoFile) {
      formData.append('photo[image]', this.state.photoFile);
    }
    this.props.updatePhoto(formData);
    this.props.closeModal();
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  handleFile(e) {
    this.state.preview = URL.createObjectURL(e.currentTarget.files[0])
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

 renderErrors() {

    if (this.props.errors.sessionErrors.length != 0) {
      return (
        <ul className="error-list">
          {this.props.errors.sessionErrors.map((err, idx) => (
            <li key={idx}>{ err }</li>
          ))}
        </ul>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const disabled = (this.state.title == "")
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
            value="Update"
            disabled={(disabled) ? "disabled" : ""}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoEdit;

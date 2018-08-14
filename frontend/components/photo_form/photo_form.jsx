import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      preview: null,
      description: ""
    }
    this.preview = null;
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    if (this.state.photoFile) {
      formData.append('photo[image]', this.state.photoFile);
    }
    formData.append('photo[description]', this.state.description);
    formData.append('photo[author_id]', this.props.currentUser.id)
    $.ajax({
      url: 'api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  handleFile(e) {
    this.preview = URL.createObjectURL(e.currentTarget.files[0])
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  render() {
    return (
      <div>
        <form
          className="upload-form-container"
          onSubmit={this.handleSubmit.bind(this)}
        >
        <div className="upload-photo">
          <label id="upload-photo-button"> Select Photo
            <input type="file"
             onChange={this.handleFile.bind(this)} />
          </label>
          <br/><br/>
          <img className="preview-pic" src={this.preview}/>
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
            <br/>
            <label htmlFor="photo-description"> Description
              <br/>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}></textarea>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Upload Photo"/>
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoForm;

import React from 'react';

class OwnProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.user.username,
            preview: this.props.user.profileUrl,
            profilePicture: null
        }
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('user[username]', this.state.username);
        if (this.state.profilePicture) {
            formData.append('user[image]', this.state.profilePicture);
        }
        console.log(this, "hi")
        this.props.updateUser(formData);
    }

    update(field) {
        return event => this.setState({ [field]: event.currentTarget.value });
    }

    handleFile(e) {
        this.state.preview = URL.createObjectURL(e.currentTarget.files[0])
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

  render() {
    const disabled = (this.state.title == "")
    return (
      <div>
        <form
          className="profile-form-container"
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

            <label> Username
              <br/>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                ></input>
            </label>
            
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
export default OwnProfileEdit;
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.status = ""
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginWithDemo = this.loginWithDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/yourphotos');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state
    this.props.processForm(user);
  }

  loginWithDemo(event) {
    event.preventDefault();
    this.props.demoLogin({
      username: "testing",
      password: "testing"
    })
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  toggleSignInSignUp() {
    if (this.props.formType === "login") {
      this.status = "Log In to p5000x";
      this.buttonStatus = "Log In";
    } else {
      this.status = "Join p5000x";
      this.buttonStatus = "Sign Up";
    }
  }

  renderErrors() {
    // console.log("ERRORS")
    // console.log(this.props)
    // console.log("props")
    // console.log(this.props.errors.sessionErrors)
    // console.log("errors")

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
    return (
      <div className="session-container">
        <br/>
        <form className ="session-form" onSubmit={this.handleSubmit}>
          {this.toggleSignInSignUp()}
          <div id="status" >{this.status}</div>
          {this.renderErrors()}
          <div className="session-inputs">
            <label>
              Username
              <br/>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="session-input"/>
            </label>
            <label>
              <br/>
              Password
              <br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-input"
              />
            </label>
            <br/>
            <input
              className="button-primary mainButton"
              type="submit"
              value={this.buttonStatus}
            />
            <button
              onClick={this.loginWithDemo}
              className="button-primary mainButton"> DEMO LOGIN </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

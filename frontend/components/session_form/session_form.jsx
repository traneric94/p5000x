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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state
    this.props.processForm({ user });
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  toggleSignInSignUp() {
    if (this.props.formType === "login") {
      this.status = "Log In to p5000x"
      this.buttonStatus = "Log In"
    } else {
      this.status = "Join p5000x"
      this.buttonStatus = "Sign Up"
    }
  }

  errors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((err, idx) => (
            <li key={idx}>{ err }</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="session-container">
        <br/>
          <br/>
        <br/>
        <form className ="session-form" onSubmit={this.handleSubmit}>
          {this.toggleSignInSignUp()}
          {this.errors()}
          <div className="session-inputs">
            <label>
              Username:
              <br/>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="session-input"/>
            </label>
            <label>
              <br/>
              Password:
              <br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

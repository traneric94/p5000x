import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.errors = { user: false, pass: false }
    this.status = ''
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginWithDemo = this.loginWithDemo.bind(this);
  }
  
  componentDidMount() {
    this.props.clearSessionErrors();
    this.errors.user = false;
    this.errors.pass = false
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const user = this.state
    this.props.processForm(user).then(() => this.props.history.push('/feed'));
  }

  loginWithDemo(event) {
    event.preventDefault();
    this.props.demoLogin({
      username: 'doggo',
      password: 'password'
    }).then(() => this.props.history.push('/feed'));
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  toggleSignInSignUp() {
    if (this.props.formType === 'login') {
      this.status = 'Log In to p5000x';
      this.buttonStatus = 'Log In';
    } else {
      this.status = 'Join p5000x';
      this.buttonStatus = 'Sign Up';
    }
  }

  renderErrors() {
        return (
        <ul className='error-list'>
          {
            (this.props.errors.length != 0) ? (
             this.props.errors.map((err, idx) => {
              if (err.includes('name')) {
                this.errors.user = true
              }
              if (err.includes('word')) {
                this.errors.pass = true
              }
              return <li key={idx}>{ err }</li>
            })
            ) : (null)
          }
        </ul>
      );
  }

  addExtraFormElements() {
    if (this.props.formType !== 'login') {
      return <div>
          <label>
            Email
            <br />
            <input 
              type='text' 
              value={this.state.email} 
              onChange={this.update('email')} 
              className='session-input'
            />
          </label>
          <label>
            First Name
            <br />
            <input 
              type='text' 
              value={this.state.fName} 
              onChange={this.update('fName')} 
              className='session-input'
            />
          </label>
          <label>
            Last Name
            <br />
            <input 
              type='text' 
              value={this.state.lName} 
              onChange={this.update('lName')} 
              className='session-input'
            />
          </label>
        </div>;
    } 
  }

  render() {
    return (
      <div className='session-container'>
        <br/>
        <form className ='session-form' onSubmit={this.handleSubmit}>
          {this.toggleSignInSignUp()}
          <div id='status' >{this.status}</div>
          {this.renderErrors()}
          <div className='session-inputs'>
            {this.addExtraFormElements()}
            <label>
              Username
              <br/>
              <input
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
                className={'session-input ' + (this.errors.user ? 'err' :'')}
                autoComplete='true'
                autoFocus
                />
            </label>
            <label>
              Password
              <br/>
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className={'session-input ' + (this.errors.pass ? 'err' :'')}
              />
            </label>
            <br/>
            <input
              className='button-primary mainButton'
              type='submit'
              value={this.buttonStatus}
            />
            <button
              onClick={this.loginWithDemo}
              className='button-primary mainButton'> Demo Login </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

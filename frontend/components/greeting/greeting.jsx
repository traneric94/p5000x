import React from 'react';
import { Link } from 'react-router-dom';

const newSessionLinks = ({currentUser, ownProps, clearErrors}) => {
  const path = ownProps.location.pathname.slice(1);
  if (!currentUser) {
    if (path === "signup") {
      return (
        <nav className="login-signup">
          <Link className="button-primary" to="/login">Login</Link>
        </nav>
      )
    } else if (path === "login") {
      return (
        <nav className="login-signup">
          <Link className="button-primary" to="/signup">Sign Up</Link>
        </nav>
      )
    } else if (path === "") {
      return (
        <nav className="login-signup">
          <Link className="button-primary" id="second-button" to="/login">Login</Link>
          <Link className="button-primary" to="/signup">Sign Up</Link>
        </nav>
      )
    }
  }
  
};

const greeting = ({currentUser, logOut, ownProps, openModal}) => {
  return (
    <div className="nav-right">
      <hgroup className="dropdown">
          <img className="profile-pic" src={currentUser.profileUrl}/>
          <ul className="nav-header-dropdown">
            <li><Link to="/profile" className="dropdown-button" >Profile</Link></li>
            <li><Link to="/users" className="dropdown-button" >Users</Link></li>
            <li><Link className="dropdown-button"
              onClick={logOut}
              to="/"
              >Log Out</Link></li>
          </ul>
      </hgroup>
      <div className="login-signup">
        <button id="nav-upload" className="button-primary" onClick={() => openModal('create') }>
          Upload</button>
      </div>
    </div>
)};

const Greeting = (state) => {
  return state.currentUser ? greeting(state) : newSessionLinks(state)
};
export default Greeting;

import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const newSessionLinks = (currentUser, ownProps) => {
  let path = ownProps.location.pathname.slice(1);
  if (path === "signup" && !currentUser) {
  return (
    <nav className="login-signup">
      <Link className="button-primary" to="/login">Login</Link>
    </nav>
    )
  } else if (path === "login" && !currentUser){
    return (
      <nav className="login-signup">
        <Link className="button-primary" to="/signup">Sign Up</Link>
      </nav>
    )
  } else if (path === "" && !currentUser) {
    return (
      <nav className="login-signup">
        <Link className="button-primary" id="second-button" to="/login">Login</Link>
        <Link className="button-primary" to="/signup">Sign Up</Link>
    </nav>
  )
  }
};

const greeting = (currentUser, logOut, ownProps, openModal) => {
  return (
    <div className="nav-right">
      <hgroup className="dropdown">
          <img className="profile-pic" src={ownProps.profile}/>
          <ul className="nav-header-dropdown">
            <li><Link to="/profile" className="dropdown-button" >Profile</Link></li>
            <li><Link to="/yourphotos" className="dropdown-button" >Your Photos</Link></li>
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

const Greeting = ({ currentUser, logOut, ownProps, openModal}) => {
  return currentUser ? greeting(currentUser, logOut, ownProps, openModal) :
  newSessionLinks(currentUser, ownProps)
};

export default Greeting;

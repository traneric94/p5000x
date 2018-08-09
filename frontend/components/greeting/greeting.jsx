import React from 'react';
import { Link } from 'react-router-dom';

const newSessionLinks = (currentUser, ownProps) => {
  let path = ownProps.location.pathname.slice(1);
  if (path === "signup" && !currentUser) {
  return (
    <nav className="login-signup">
      <Link className="newUser" to="/login">Login</Link>
    </nav>
    )
  } else if (path === "login" && !currentUser){
    return (
      <nav className="login-signup">
        <Link className="newUser" to="/signup">Sign Up</Link>
      </nav>
    )
  } else if (path === "" && !currentUser) {
    return (
      <nav className="login-signup">
        <Link className="newUser" id="second-button" to="/login">Login</Link>
        <Link className="newUser" to="/signup">Sign Up</Link>
    </nav>
  )
  }
};

const greeting = (currentUser, logOut, ownProps) => {
  return (
    <hgroup className="dropdown">
        <img className="profile-pic" src={ownProps.profile}/>
        <ul className="nav-header-dropdown">
          <li><button>Profile</button></li>
          <li><button>Settings</button></li>
          <li><button>Photos</button></li>
          <li><button id="logout" onClick={logOut}>Log Out</button></li>
        </ul>
    </hgroup>
)};

const Greeting = ({ currentUser, logOut, ownProps}) => {
  return currentUser ? greeting(currentUser, logOut, ownProps) :
  newSessionLinks(currentUser, ownProps)
};

export default Greeting;

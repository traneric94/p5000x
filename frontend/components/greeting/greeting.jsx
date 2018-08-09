import React from 'react';
import { Link } from 'react-router-dom';

const newSessionLinks = (ownProps) => {
  let path = ownProps.location.pathname.slice(1);
  if (path === "signup") {
  return (
    <nav className="login-signup">
      <Link className="newUser" to="/login">Login</Link>
    </nav>
    )
  } else {
    return (
      <nav className="login-signup">
        <Link className="newUser" to="/signup">Sign Up</Link>
      </nav>
    )
  }
};

const greeting = (currentUser, logOut) => (
  <hgroup className="nav-header-right">
    <button className="nav-header-button" onClick={logOut}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logOut, ownProps}) => {
  return currentUser ? greeting(currentUser, logOut) : newSessionLinks(ownProps)
};

export default Greeting;

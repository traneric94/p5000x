import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// If not logged in, redirect to splash
const Auth = ({component: Component, path, loggedIn, exact }) => (
  <Route
    exact={exact}
    path={path} 
    render={(props) => 
    !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

//If logged in, render component, else redirect to signup
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    exact={exact}
    path={path} 
    render={(props) =>
     loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    } 
  />
);

const mapStateToProps = state => ({
 loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

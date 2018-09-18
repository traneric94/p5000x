import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Link, HashRouter, withRouter } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotosContainer from './photos/photos_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
import OwnProfileContainer from './own_profile/own_profile_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1 className="nav-bar">
        <Link to='/'><img id="logo" src={window.logo} /></Link>
        <GreetingContainer />
      </h1>
    </header>

    <Switch>
      <Route exact path='/' component={PhotosContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      {/* <ProtectedRoute path='/yourphotos' component={PhotosContainer} /> */}
      <ProtectedRoute path='/users' component={ProfileContainer}/>
      <ProtectedRoute path='/profile' component={OwnProfileContainer} />
    </Switch>

  </div>
);

export default App;

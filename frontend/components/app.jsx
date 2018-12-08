import React from 'react';
import { Switch, Link } from 'react-router-dom';
import Modal from './modal/modal';
import NavBar from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilesListContainer from './profiles_list/profiles_list_container';
import OwnProfileContainer from './own_profile/own_profile_container';
import SplashContainer from './splash/splash_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';
import PhotoTestContainer from './photos_test/photos_container';

const App = () => (
  <div>
    <Modal />
    <div className="nav-bar">
      <Link to="/">
        <img id="logo" src={window.logo} />
      </Link>
      <NavBar />
    </div>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/feed" component={PhotoFeedContainer} />
      <ProtectedRoute path="/users" component={ProfilesListContainer} />
      <ProtectedRoute exact path="/:username" component={OwnProfileContainer} />
      <ProtectedRoute path="/photo/:photo_id" component={PhotoTestContainer} />
    </Switch>
  </div>
);

export default App;

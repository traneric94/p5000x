import React from 'react';
import { Switch, Link } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilesListContainer from './profiles_list/profiles_list_container';
import OwnProfileContainer from './own_profile/own_profile_container';
import SplashContainer from './splash/splash_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';

const App = () => (
  <div>
    <Modal />
    <div className="nav-bar">
        <img id="logo" src={window.logo} />
      <GreetingContainer />
    </div>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/feed" component={PhotoFeedContainer} />
      <ProtectedRoute path="/users" component={ProfilesListContainer} />
      <ProtectedRoute path="/:username" component={OwnProfileContainer} />
    </Switch>
  </div>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotosContainer from './photos/photos_container';

const App = () => (
  <div>
    <header>
      <h1 className="nav-bar">
        <img id="logo" src={window.logo} />
        <GreetingContainer profile = {window.profile_pic}/>
      </h1>
      <hr/>
    </header>

    <Route path='/login' component={SessionFormContainer} />
    <Route path='/signup' component={SessionFormContainer} />
    <Route path='/popular' component={PhotosContainer} />
  </div>
);

export default App;

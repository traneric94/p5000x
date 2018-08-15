import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, HashRouter, withRouter } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotosContainer from './photos/photos_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1 className="nav-bar">
        <Link to='/'><img id="logo" src={window.logo} /></Link>
        <GreetingContainer profile ={window.profile_pic}/>
      </h1>
      <hr/>
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <Route exact path='/' component={PhotosContainer} />
    <ProtectedRoute path='/yourphotos' component={PhotosContainer} />
    <ProtectedRoute path='/profile'/>

  </div>
);

export default App;

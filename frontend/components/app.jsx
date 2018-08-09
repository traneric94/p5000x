import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1 className="nav-bar"> p5000x
        <GreetingContainer />
      </h1>
    </header>

    <Route path='/login' component={SessionFormContainer} />
    <Route path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;

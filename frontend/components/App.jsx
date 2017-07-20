import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import ContestFormContainer from './contest/contest_form_container';
import ContestLobbyContainer from './contest/contest_lobby_container';

const App = () => (
  <div>
    <header className='header'>
      <NavBarContainer />
    </header>

    <Route path='/createcontest' component={ContestFormContainer} />
    <Route path='/lobby' component={ContestLobbyContainer} />
  </div>
);

export default App;

import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import ContestFormContainer from './contest/contest_form_container';
import ContestLobbyContainer from './contest/contest_lobby_container';
import PlayerListContainer from './playerlist/player_list_container';
import DashboardContainer from './dashboard/dashboard_container';
import Homepage from './navbar/homepage.jsx';

const App = () => (
  <div>
    <header className='header'>
      <NavBarContainer />
    </header>

    <Route exact path='/' component = {Homepage} />
    <Route path='/createcontest' component={ContestFormContainer} />
    <Route path='/lobby' component={ContestLobbyContainer} />
    <Route path='/contest/draft/' component={PlayerListContainer} />
    <Route path='/dashboard' component={DashboardContainer} />
  </div>
);

export default App;

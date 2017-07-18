import React from 'react';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <header className='header'>
      <NavBarContainer />
    </header>

  </div>
);

export default App;

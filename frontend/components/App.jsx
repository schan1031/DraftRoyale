import React from 'react';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>DraftRoyale Hi</h1>
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;

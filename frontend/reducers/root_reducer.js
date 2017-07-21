import sessionReducer from './session_reducer';
import contestReducer from './contest_reducer';
import playerReducer from './player_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  contests: contestReducer,
  players: playerReducer
});

export default rootReducer;

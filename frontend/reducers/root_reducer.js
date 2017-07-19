import sessionReducer from './session_reducer';
import contestReducer from './contest_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  contests: contestReducer
});

export default rootReducer;

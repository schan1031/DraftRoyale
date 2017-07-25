import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, defaultState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    default:
      return state;
  }
};

export default sessionReducer;

import merge from 'lodash/merge';
import { RECEIVE_ENTRIES, RECEIVE_ENTRY } from '../actions/dashboard_actions';

const defaultState = {
  allEntries: {}
};

const dashboardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ENTRIES:
      const allEntries = action.entries;
      return Object.assign({}, defaultState, { allEntries });
    case RECEIVE_ENTRY:
      const entry = action.entry;
      const entries = merge({}, state.allEntries);
      entries[entry.id] = entry;
      return Object.assign({}, defaultState, { allEntries: entries });
    default:
      return state;
  }
};

export default dashboardReducer;

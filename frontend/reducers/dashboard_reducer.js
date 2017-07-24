import merge from 'lodash/merge';
import { RECEIVE_ENTRIES } from '../actions/dashboard_actions';

const defaultState = {
  allEntries: {},
  pastEntries: [],
  upcomingEntries: []
};

const dashboardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ENTRIES:
      const allEntries = action.entries;
      return Object.assign({}, defaultState, { allEntries });
    default:
      return state;
  }
};

export default dashboardReducer;

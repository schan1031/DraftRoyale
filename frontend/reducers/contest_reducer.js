import merge from 'lodash/merge';
import { RECEIVE_ERRORS,
  RECEIVE_ALL_CONTESTS,
  RECEIVE_ONE_CONTEST
} from '../actions/contest_actions';

const defaultState = {
  contests: {},
  errors: []
};

const contestReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, { errors });
    case RECEIVE_ALL_CONTESTS:
      const contests = action.contests;
      return merge({}, defaultState, { contests });
    case RECEIVE_ONE_CONTEST:
      const contest = action.contest;
      const newState = merge({}, state);
      newState.contests[contest.id] = contest;
      return newState;
    default:
      return state;
  }
};

export default contestReducer;

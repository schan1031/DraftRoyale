import merge from 'lodash/merge';
import { RECEIVE_ERRORS,
  RECEIVE_ALL_CONTESTS,
  RECEIVE_ONE_CONTEST,
  RECEIVE_SCHEDULE,
  CHOOSE_CONTEST
} from '../actions/contest_actions';

const defaultState = {
  contests: {},
  contestErrors: [],
  schedule: {},
  contestId: ''
};

const contestReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      const contestErrors = action.contestErrors;
      return Object.assign({}, defaultState, { contestErrors });
    case RECEIVE_ALL_CONTESTS:
      const contests = action.contests;
      return merge({}, defaultState, { contests });
    case RECEIVE_ONE_CONTEST:
      const contest = action.contest;
      const newState = merge({}, state);
      newState.contests[contest.id] = contest;
      return newState;
    case RECEIVE_SCHEDULE:
      const schedule = action.schedule;
      return merge({}, state, { schedule });
    case CHOOSE_CONTEST:
      const contestId = action.contestId;
      return Object.assign({}, state, { contestId });
    default:
      return state;
  }
};

export default contestReducer;

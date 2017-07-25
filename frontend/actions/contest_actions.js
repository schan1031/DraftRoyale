export const RECEIVE_ALL_CONTESTS = 'RECEIVE_CONTESTS';
export const RECEIVE_ONE_CONTEST = 'RECEIVE_ONE_CONTEST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';
export const CHOOSE_CONTEST = 'CHOOSE_CONTEST';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

import * as APIUtil from '../util/contest_api_util';
import { getSchedule } from '../util/schedule_api_util';

export const receiveAllContests = (contests) => ({
  type: RECEIVE_ALL_CONTESTS,
  contests
});

export const receiveOneContest = (contest) => ({
  type: RECEIVE_ONE_CONTEST,
  contest
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  contestErrors: errors
});

export const receiveSchedule = (schedule) => ({
  type: RECEIVE_SCHEDULE,
  schedule
});

export const fetchAllContests = () => dispatch => (
  APIUtil.getContests().then(contests => (
    dispatch(receiveAllContests(contests))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const fetchContest = (contest) => dispatch => (
  APIUtil.getContest(contest).then(contestObj => (
    dispatch(receiveOneContest(contestObj))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const submitContest = (contest) => dispatch => (
  APIUtil.postContest(contest).then(contestObj => (
    dispatch(receiveOneContest(contestObj))
  ), errors =>(
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const fetchSchedule = (date) => dispatch => (
  getSchedule(date).then(
    dateObj => dispatch(receiveSchedule(dateObj))
  )
);

export const chooseContest = (contestId) => ({
  type: CHOOSE_CONTEST,
  contestId
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

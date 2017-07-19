export const RECEIVE_ALL_CONTESTS = 'RECEIVE_CONTESTS';
export const RECEIVE_ONE_CONTEST = 'RECEIVE_ONE_CONTEST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as APIUtil from '../util/contest_api_util';

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
  errors
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

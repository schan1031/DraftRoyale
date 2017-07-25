import { connect } from 'react-redux';
import { fetchAllContests, fetchContest, submitContest, clearErrors } from '../../actions/contest_actions';
import ContestForm from './contest_form';

const mapStateToProps = state => ({
  contests: state.contests.contests,
  loggedIn: !!state.session.currentUser,
  errors: state.contests.contestErrors
});

const mapDispatchToProps = dispatch => ({
  submitContest: contest => dispatch(submitContest(contest)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContestForm);

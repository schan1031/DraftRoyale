import { connect } from 'react-redux';
import { fetchAllContests, fetchContest, submitContest } from '../../actions/contest_actions';
import ContestForm from './contest_form';

const mapStateToProps = state => ({
  contests: state.contests.contests,
  errors: state.contests.errors
});

const mapDispatchToProps = dispatch => ({
  submitContest: contest => dispatch(submitContest(contest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContestForm);

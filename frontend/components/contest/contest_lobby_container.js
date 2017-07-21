import { connect } from 'react-redux';
import { fetchAllContests, fetchSchedule } from '../../actions/contest_actions';
import ContestLobby from './contest_lobby';

const mapStateToProps = state => ({
  contests: state.contests.contests,
  loggedIn: !!state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchAllContests: () => dispatch(fetchAllContests()),
  fetchSchedule: (date) => dispatch(fetchSchedule(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContestLobby);

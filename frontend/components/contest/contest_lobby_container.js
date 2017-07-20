import { connect } from 'react-redux';
import { fetchAllContests } from '../../actions/contest_actions';
import ContestLobby from './contest_lobby';

const mapStateToProps = state => ({
  contests: state.contests.contests,
  loggedIn: !!state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchAllContests: () => dispatch(fetchAllContests())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContestLobby);

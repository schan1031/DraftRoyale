import { connect } from 'react-redux';
import { fetchPlayers, draftPlayer, returnPlayer } from '../../actions/player_actions';
import { submitEntry } from '../../actions/dashboard_actions';
import PlayerList from './player_list';

const mapStateToProps = state => ({
  players: state.players.players,
  myTeam: state.players.myTeam,
  schedule: state.contests.schedule,
  contestId: state.contests.contestId,
  currentUser: state.session.currentUser,
  prevNames: state.players.prevTeamNames
});

const mapDispatchToProps = dispatch => ({
  fetchPlayers: (teamIds) => dispatch(fetchPlayers(teamIds)),
  draftPlayer: (player) => dispatch(draftPlayer(player)),
  returnPlayer: (player) => dispatch(returnPlayer(player)),
  submitEntry: entry => dispatch(submitEntry(entry))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList);

import { connect } from 'react-redux';
import { fetchPlayers, draftPlayer, returnPlayer } from '../../actions/player_actions';
import PlayerList from './player_list';

const mapStateToProps = state => ({
  players: state.players.players,
  myTeam: state.players.myTeam,
  schedule: state.contests.schedule
});

const mapDispatchToProps = dispatch => ({
  fetchPlayers: (teamIds) => dispatch(fetchPlayers(teamIds)),
  draftPlayer: (player) => dispatch(draftPlayer(player)),
  returnPlayer: (player) => dispatch(returnPlayer(player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList);

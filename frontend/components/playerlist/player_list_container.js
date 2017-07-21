import { connect } from 'react-redux';
import { fetchPlayers } from '../../actions/player_actions';
import PlayerList from './player_list';

const mapStateToProps = state => ({
  players: state.players.players,
  schedule: state.contests.schedule
});

const mapDispatchToProps = dispatch => ({
  fetchPlayers: (teamIds) => dispatch(fetchPlayers(teamIds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList);

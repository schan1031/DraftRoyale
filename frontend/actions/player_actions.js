export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

import * as APIUtil from '../util/player_api_util';

export const receivePlayers = players => ({
  type: RECEIVE_PLAYERS,
  players
});

export const fetchPlayers = (teamIds) => dispatch => (
  APIUtil.getPlayers(teamIds).then(
    players => dispatch(receivePlayers(players))
  )
);

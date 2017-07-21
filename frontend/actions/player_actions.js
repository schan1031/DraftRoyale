export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
export const DRAFT_PLAYER = 'DRAFT_PLAYER';
export const RETURN_PLAYER = 'RETURN_PLAYER';

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

export const draftPlayer = player => ({
  type: DRAFT_PLAYER,
  player
});

export const returnPlayer = player => ({
  type: RETURN_PLAYER,
  player
});

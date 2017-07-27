import merge from 'lodash/merge';
import { RECEIVE_PLAYERS, DRAFT_PLAYER, RETURN_PLAYER } from '../actions/player_actions';

const defaultState = {
  players: {},
  player_errors: [],
  myTeam: {},
  prevTeamNames: ['', '', '', '', '', '', '', '']
};

const playerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYERS:
      const players = action.players;
      return Object.assign({}, defaultState, { players });
    case DRAFT_PLAYER:
      const player = action.player;
      const newState = merge({}, state);
      newState.myTeam[player.id] = player;
      delete newState.players[player.id];

      let i = 0;
      while (newState.prevTeamNames[i]) {
        i++;
      }
      newState.prevTeamNames[i] = player.name;

      return newState;
    case RETURN_PLAYER:
      const playee = action.player;
      const newStatey = merge({}, state);
      newStatey.players[playee.id] = playee;
      delete newStatey.myTeam[playee.id];

      const ind = newStatey.prevTeamNames.indexOf(playee.name);
      newStatey.prevTeamNames[ind] = '';

      return newStatey;
    default:
      return state;
  }
};

export default playerReducer;

import merge from 'lodash/merge';
import { RECEIVE_PLAYERS } from '../actions/player_actions';

const defaultState = {
  players: {},
  player_errors: [],
  myTeam: {}
};

const playerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYERS:
      const players = action.players;
      return Object.assign({}, defaultState, { players });
    default:
      return state;
  }
};

export default playerReducer;

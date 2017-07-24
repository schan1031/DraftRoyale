export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';

import * as APIUtil from '../util/entry_api_util';

export const receiveEntries = entries => ({
  type: RECEIVE_ENTRIES,
  entries
});

// export const receivePlayer = player => ({
//   type: RECEIVE_PLAYER,
//   player
// });

export const fetchEntries = entries => dispatch => (
  APIUtil.getEntries().then(
    fetchedEntries => dispatch(receiveEntries(fetchedEntries))
  )
);

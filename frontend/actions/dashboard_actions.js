export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
import * as APIUtil from '../util/entry_api_util';

export const receiveEntries = entries => ({
  type: RECEIVE_ENTRIES,
  entries
});

export const receiveEntry = entry => ({
  type: RECEIVE_ENTRY,
  entry
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

export const submitEntry = entry => dispatch => (
  APIUtil.postEntry(entry).then(
    fetchedEntry => dispatch(receiveEntry(fetchedEntry))
  )
);

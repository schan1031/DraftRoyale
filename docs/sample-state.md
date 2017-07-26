# Sample State

### Contest Lobby
```
{
  session: {
    currentUser: {
      id: 1,
      username: 'TheGOAT'
    }
  },
  contests: {
    1: {
      id: 1,
      name: 'Contest One',
      creator_id: 1,
      max_contestants: 10,
      point_value: 500
    },
    2: {
      id: 2,
      name: 'Contest Two',
      creator_id: 1,
      max_contestants: 12,
      point_value: 200
    }
  }
  players: {
    players: {
      1: PlayerObject
    }
    myTeam: {
      2: PlayerObject
    }
  }
  entries: {
    1: {
      contest: {}
      players: {}
    }
  }
}
```

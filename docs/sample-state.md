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
}
```

### Draft
```
{
  session: {
    currentUser: {
      id: 1,
      username: 'TheGOAT'
    }
  },
  teams: {
    1: {
      id: 1,
      name: 'New York Knicks'
    },
    2: {
      id: 2,
      name: 'Houston Rockets'
    }
  },
  players: {
    1: {
      id: 1,
      name: 'Chris Paul',
      ppg: 15,
      apg: 20,
      rpg: 5,
      spg: 5,
      bpg: 0.5,
      ft%: 95,
      height: 74,
      weight: 185,
      team_id: 2
    }
  }
  current_team: {
    2: {
      id: 2,
      name: 'Kristaps Porzingis',
      ppg: 20,
      apg: 5,
      rpg: 15,
      spg: 5,
      bpg: 5,
      ft%: 95,
      height: 84,
      weight: 270,
      team_id: 1
    }
  }
}
```

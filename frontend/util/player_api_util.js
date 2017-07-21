export const getPlayers = (team_ids) => (
  $.ajax({
    method: 'GET',
    url: '/api/players',
    data: { player: team_ids }
  })
);

// $.ajax({method: 'GET', url: '/api/players', data: { player: { team_ids: [273, 271]}}})

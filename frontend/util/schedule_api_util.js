export const getSchedule = (date) => (
  $.ajax({
    method: 'GET',
    url: '/api/schedule',
    data: { schedule: { date } }
  })
);

// $.ajax({method: 'GET', url: '/api/schedule', data: { schedule: { date: new Date(2017, 6, 25) }}})

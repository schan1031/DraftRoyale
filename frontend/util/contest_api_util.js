export const getContests = () => (
  $.ajax({
    method: 'GET',
    url: '/api/contests'
  })
);

export const getContest = (contest) => (
  $.ajax({
    method: 'GET',
    url: `/api/contests/${contest.id}`
  })
);

export const deleteContest = (contest) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/contests/${contest.id}`
  })
);

export const postContest = (contest) => (
  $.ajax({
    method: 'POST',
    url: '/api/contests',
    data: {contest}
  })
);

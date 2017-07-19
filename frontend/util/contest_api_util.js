export const getContests = () => (
  $.ajax({
    method: 'GET',
    url: '/api/contests'
  })
);

export const getContest = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/contests/${id}`
  })
);

export const deleteContest = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/contests/${id}`
  })
);

export const postContest = (contest) => (
  $.ajax({
    method: 'POST',
    url: '/api/contests',
    data: {contest}
  })
);

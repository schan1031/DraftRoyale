export const postEntry = entry => (
  $.ajax({
    method: 'POST',
    url: '/api/contests',
    data: {entry}
  })
);

export const postEntry = entry => (
  $.ajax({
    method: 'POST',
    url: '/api/entries',
    data: {entry}
  })
);

export const postEntry = entry => (
  $.ajax({
    method: 'POST',
    url: '/api/entries',
    data: {entry}
  })
);

export const getEntries = () => (
  $.ajax({
    method: 'GET',
    url: '/api/entries'
  })
);

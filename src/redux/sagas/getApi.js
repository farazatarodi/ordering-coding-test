// The function that sends the request to the API
export default function getApi(apiUrl) {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => alert(error.message));
}

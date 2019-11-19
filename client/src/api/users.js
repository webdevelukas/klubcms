// Get user by ID
export function getUser(userId) {
  return fetch(`/api/users/${userId}`, {
    method: "GET"
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

// Add user
export function postUser(data) {
  fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

// Compare user credentials
export function postUserLogin(data) {
  return fetch(`/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

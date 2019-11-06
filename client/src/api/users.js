// Get user by ID
export async function getUser(userId) {
  const promise = await fetch(`/api/users/${userId}`).then(response =>
    response.json()
  );
  return promise;
}

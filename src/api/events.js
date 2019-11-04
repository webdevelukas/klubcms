export async function getEvents() {
  const promise = await fetch("/api/events").then(response => response.json());
  return promise;
}

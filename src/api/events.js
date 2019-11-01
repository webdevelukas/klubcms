export async function getEvents() {
  const promise = await fetch("/events").then(response => response.json());
  return promise;
}

export async function getArticles() {
  const promise = await fetch("/articles").then(response => response.json());
  return promise;
}

export async function getArticle(articleId) {
  const promise = await fetch(`/articles/${articleId}`).then(response =>
    response.json()
  );
  return promise;
}

export async function getEvents() {
  const promise = await fetch("/events").then(response => response.json());
  return promise;
}

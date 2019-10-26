export async function getArticles() {
  const promise = await fetch("http://localhost:3000/articles").then(response =>
    response.json()
  );
  return promise;
}

export async function getArticle(articleId) {
  const promise = await fetch(
    `http://localhost:3000/articles/${articleId}`
  ).then(response => response.json());
  return promise;
}

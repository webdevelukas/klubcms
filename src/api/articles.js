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

export function patchArticle(data, articleId) {
  fetch(`/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export function postArticle(data) {
  fetch(`/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

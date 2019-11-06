export function getArticles() {
  return fetch(`/api/articles`, {
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

export function getArticle(articleId) {
  return fetch(`/api/articles/${articleId}`, {
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

export function patchArticle(data, articleId) {
  fetch(`/api/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export function postArticle(data) {
  fetch(`/api/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

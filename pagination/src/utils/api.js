const API_ENDPOINT = 'https://api.github.com' 

const api = {
  fetchRepoList : (keyword, page) => {
    return fetch(`${API_ENDPOINT}/search/repositories?q=${keyword}&page=${page}&per_page=10`).then(res => res.json())
  }
}

export default api
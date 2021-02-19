const API_ENDPOINT = "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";


const api = {
  fetchRandomCats : () => {
    return fetch(`${API_ENDPOINT}/api/cats/random50`).then(res => res.json())
  }
 
}


export default api
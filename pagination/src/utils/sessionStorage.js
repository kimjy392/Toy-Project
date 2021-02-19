const sessionStorage = {
  getData : (key) => {
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  setData : (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}

export default sessionStorage

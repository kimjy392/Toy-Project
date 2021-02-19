export default class Home {
  constructor() {
    this.$home = document.createElement('div')
    this.$home.textContent = 'home!!'
  }

  render() {
    return this.$home.outerHTML
  }
}
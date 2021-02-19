export default class About {
  constructor() {
    this.$about = document.createElement('div')
    this.$about.textContent = 'About!!'
  }

  render() {
    return this.$about.outerHTML
  }
}
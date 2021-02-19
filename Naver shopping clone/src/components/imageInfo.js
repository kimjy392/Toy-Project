export default class ImageInfo {
  data = null;
  constructor({$target}) {
    this.$imageInfo = document.createElement('div')
    $target.appendChild(this.$imageInfo)
  }

  setData(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    this.$imageInfo.innerHTML = `<img src="${this.data.product.url}">`
  }
}
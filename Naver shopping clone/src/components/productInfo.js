export default class ProductInfo {
  data = null;
  constructor({$target}) {
    this.$productInfo = document.createElement('div')
    this.$target = $target
    $target.appendChild(this.$productInfo)
  }

  setData(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    this.$productInfo.innerHTML = `<h2>${this.data.product.title}</h2>`
  }
}
export default class SelectedProduct {
  data = [];
  amount = [];
  constructor({$target}) {
    this.selectedProduct = document.createElement('div')
    this.selectedProduct.classList.add('.selected-product')
    $target.appendChild(this.selectedProduct)
    this.addEvent()
  }

  setData(nextData) {
    this.data = [...this.data, nextData]
    this.amount = [...this.amount, 1]
    this.render()
  }

  addEvent() {
    this.selectedProduct.addEventListener('click', (event) => {
      const parent = event.target.closest('.counter-wrap')
      if (!parent) return
      const idx = parent.dataset.idx
      if (event.target.classList.contains('down')) {
        console.log('down')
        if (this.amount[idx] - 1 < 1) {
          return
        }
        this.amount[idx] --;
      }

      if (event.target.classList.contains('up')) {
        console.log('up')
        this.amount[idx] ++;
      }

      if (event.target.classList.contains('delete')) {
        this.amount.splice(idx, 1)
        this.data.splice(idx, 1)
      }
      this.render()
    })
  }
  
  render() {
    this.selectedProduct.innerHTML = `${this.data.map((item, idx) => {
      return `
        <div class="counter-wrap" data-idx="${idx}">
          <span class="selected-product-name">${item.productName} ${item.price}원</span>
          <button class="down">-</button>
          <span class="selected-product-amount">${this.amount[idx]}</span>
          <button class="up">+</button>
          <button class="delete">X</button>
        </div>
      `
    }).join('')}
    <h3>Total : ${this.data.reduce((acc, item, idx) => acc + item.price * this.amount[idx], 0)}</h3>
    `
  }
  
}
export default class ProductSelector {
  data = null;
  selectedCategory = null;
  constructor({$target, onSelectProduct}) {
    this.productSelector = document.createElement('div')
    this.productSelector.classList.add('selector-wrap')
    $target.appendChild(this.productSelector)
    this.addEvent(onSelectProduct)
  }

  setData(nextData) {
    this.data = nextData
    this.selectedCategory = new Array(this.data.category.depth)
    this.render()
  }

  addEvent(onSelectProduct) {
    this.productSelector.addEventListener('click', (event) => {
      const selector = event.target.closest('.selector')
      const openListSelector = event.currentTarget.querySelector('ul')
      console.log(openListSelector)

      if (!selector) return
      const seletedItem = event.target.closest('.item')

      if (seletedItem) {
        selector.querySelector('.selected').innerText = `${seletedItem.innerText}`
        if (selector.getAttribute('type') === 'category' ) {
          this.selectedCategory[selector.dataset.depth] = seletedItem.dataset.id * 1
        } else {
          onSelectProduct(this.data.product.products.filter((item) => item.id === seletedItem.dataset.id * 1)[0])
        }
      }

      if (openListSelector) {
        openListSelector.parentNode.removeChild(openListSelector)
      }
      else {
        this.openList(selector)
      }
    })
  }

  openList(el) {
    const list = document.createElement('ul')
    if (el.getAttribute('type') === 'category') {
      if (el.dataset.depth > 0) {
        list.innerHTML = this.data.category.subcategory
          .filter((item) => 
            this.selectedCategory[el.dataset.depth-1] === item.parent_id
          ).map((item) => `
            <li class="item" data-id="${item.id}">${item.categoryName}</li>
          `).join('')
      }
      else {
        list.innerHTML = this.data.category.category.map((item) => 
          `<li class="item" data-id="${item.id}">${item.categoryName}</li>`
        ).join('')  
      }
      
    }
    else {
      // 마지막 카테고리로만 확인하면 될듯?
      list.innerHTML = this.data.product.products.filter((item) => 
        item.category.includes(this.selectedCategory[this.data.category.depth-1])
      ).map((item) => `
        <li class="item" data-id="${item.id}">${item.productName} ${item.price}원</li>
      `).join('')
    }
    el.appendChild(list)
  }

  closeList(el) {
    el.removeChild(el.querySelector('ul'))
  }

  render() {
    if (this.data) {
      const depth = this.data.category.depth
      for (let i=0; i<depth+1;i++) {
        const wrap = document.createElement('div')
        wrap.classList.add('selector')
        wrap.dataset.depth = i
        wrap.innerHTML = `<div class="selected">선택</div>`
        wrap.setAttribute('type', i < depth ? 'category' : 'product')
        this.productSelector.appendChild(wrap)
      }
    }
  }
  
}
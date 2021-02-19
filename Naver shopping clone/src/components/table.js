export default class Table {
  constructor({$target}) {
    this.$table = document.createElement('div')
    this.$table.classList.add('table')
    $target.appendChild(this.$table)
  }

  addColumn(el) {
    this.$table.appendChild(el)
    el.classList.add('table-col')
    return el
  }
  
}
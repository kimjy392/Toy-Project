import sessionStorage from '../utils/sessionStorage.js'

export default class Search {
  constructor({$target, onSearch}) {
    this.input = document.createElement('input')
    this.input.classList.add('searchInput')
    this.input.value = sessionStorage.getData('keyword') || ''
    $target.appendChild(this.input)
    this.addEvent(onSearch)
  }

  addEvent(onSearch) {
    this.input.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') {
        onSearch(e.target.value)
        sessionStorage.setData('keyword', e.target.value)
        sessionStorage.setData('page', 1)
      }
    })
  }
  
}

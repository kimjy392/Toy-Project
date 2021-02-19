import api from '../utils/api.js'
import sessionStorage from '../utils/sessionStorage.js'

export default class Pagination {
  constructor({$target, onClick}) {
    this.props = {
      $target,
      onClick
    }
    this.curPage = sessionStorage.getData('page') || 1
    this.totalPages = null;
    this.keyword = sessionStorage.getData('keyword') || null;
    this.pagination = document.createElement('div')
    this.pagination.classList.add('pagination-wrap')
    $target.appendChild(this.pagination)

    if (this.curPage && this.keyword) {
      this.getRepoList()
    }
  }

  addEvent() {
    const buttons = this.pagination.querySelectorAll('button')
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (e.target.classList.contains('next')) {
          if (this.curPage + 1 <= this.totalPages) this.curPage ++;
        }
      
        else if(e.target.classList.contains('previous')) {
          if (this.curPage - 1 > 0) this.curPage --
        }
      
        else {
          this.curPage = parseInt(e.target.innerText)
        }
        sessionStorage.setData('page', this.curPage)
        this.getRepoList()
      })
    })
  }

  setData(data) {
    this.totalPages = Math.floor(data.total_count / 10)
    if (data.total_count % 10) this.totalPages ++
    this.render()
    this.addEvent()
  }

  pageCalulate() {
    let tmp = Math.floor((this.curPage-1) / 5)
    let numberButtonHTML = ''
    for (let i=1;i<6;i++) {
      if (5 * tmp + i > this.totalPages) break;
      if (this.curPage === 5 * tmp + i) numberButtonHTML += `<button disabled class="selected">${5 * tmp + i}</button>`
      else numberButtonHTML += `<button>${5 * tmp + i}</button>`
    }
    return numberButtonHTML
  }

  async getRepoList() {
    const data = await api.fetchRepoList(this.keyword, this.curPage)
    this.props.onClick(data)
  }

  render() {
    this.pagination.innerHTML = `
      <button class="previous">< 이전</button>
      ${this.pageCalulate()}
      <button class="next">다음 ></button>
    `
    
  }

}
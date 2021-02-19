import Pagination from './pagination.js'

export default class SearchResult {
  constructor({$target, initialData}) {
    this.data = initialData;
    this.searchResult = document.createElement('div')
    this.searchResult.classList.add('searchResult')
    this.searchResultWrap = document.createElement('div')
    this.searchResultWrap.classList.add('searchResultWrap')
    this.searchResult.appendChild(this.searchResultWrap)
    $target.appendChild(this.searchResult)
    this.pagination = new Pagination({
      $target : this.searchResult,
      onClick : (data) => {
        this.setData(data)
      }
    })
  }

  setData(nextData) {
    this.data = nextData
    this.pagination.setData(nextData)
    this.render()
  }

  render() {
    this.searchResultWrap.innerHTML = `
      <div class="searchResult-wrap">
        ${this.data.items
          .map((item) => `
            <div class="card">
              <h5>${item.full_name}</h5>
              <p>${item.owner.login}</p>
              <p>star : ${item.stargazers_count}</p>
            </div>
            <hr>
          `)
          .join('')
        }
      </div>`
  }
}
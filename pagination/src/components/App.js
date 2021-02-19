import Search from './search.js'
import SearchResult from './searchResult.js'
import api from '../utils/api.js'


export default class App {
  constructor($target) {
    this.container = document.createElement('div')
    this.container.classList.add('container')
    $target.appendChild(this.container)

    this.search = new Search({
      $target : this.container,
      onSearch : (keyword) => {
        this.getRepoList(keyword)
        this.searchResult.pagination.keyword = keyword
        this.searchResult.pagination.curPage = 1
      },
    })

    this.searchResult = new SearchResult({
      $target : this.container,
      initialData : {}
    })
  }
  
  async getRepoList(keyword) {
    const data = await api.fetchRepoList(keyword, 1)
    this.searchResult.setData(data)
    console.log(data)
  }
}
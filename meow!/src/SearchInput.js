const TEMPLATE = '<input type="text">';

class SearchInput {
  recentKeywords = []

  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.";
    $searchInput.className = "SearchInput";
    $searchInput.value = localStroage.get('keyword') || null
    $target.appendChild($searchInput);
    const $recentSearch = document.createElement('div')
    this.$recentSearch = $recentSearch
    $target.appendChild($recentSearch)

    $searchInput.focus()
    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        if (e.target.value) {
          if (this.recentKeywords.length >= 5) {
            this.recentKeywords.shift()
          }
          this.recentKeywords.push(e.target.value)
          this.render(onSearch)
        }
      }
    });

    $searchInput.addEventListener('focus', (e) => {
      if (e.target.value) {
        e.target.value = ''
      }
    })

    console.log("SearchInput created.", this);
  }
  render(search) {
    if (this.recentKeywords) {
      console.log(this.recentKeywords)
      this.$recentSearch.innerHTML = this.recentKeywords.map(keyword => 
        `<span class="recent_keyword">${keyword}</span>`
      ).join("")
      console.log(this.$recentSearch.childNodes)
      this.$recentSearch.querySelectorAll('.recent_keyword').forEach((item, idx) => {
        item.addEventListener('click', () => {
          this.$searchInput.value = this.recentKeywords[idx]
          search(this.recentKeywords[idx])
        })
      })
    }
  }
}

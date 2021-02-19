class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  $loading = null;
  isSearch = false;
  
  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.$loading = document.createElement('h1')
    this.$loading.innerText = '로딩중...'
    this.$loading.style.display = 'none'
    $target.appendChild(this.$loading)

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.isSearch = true
    this.render();
  }

  render() {
    if (this.isSearch === true & this.data.length === 0) {
      this.$searchResult.innerHTML = '<h1>검색 결과가 존재하지 않습니다.<h1>'
    }
    else if(this.data) {
      this.$searchResult.innerHTML = this.data
      .map(
        cat => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");
      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
        });
      });
    }
  }
}

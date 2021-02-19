console.log("app is running!");

class App {
  $target = null;
  data = [];
  constructor($target) {
    this.$target = $target;

    this.data = localStroage.get('data') || []

    this.toggleThemeButton()
    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.searchResult.$searchResult.style.display = 'none'
        this.searchResult.$loading.style.display = 'block'
        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data)
          localStroage.set('data', data)
          localStroage.set('keyword', keyword)
          this.searchResult.$loading.style.display = 'none'
          this.searchResult.$searchResult.style.display = 'grid'
        });
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
    
  }
  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  toggleThemeButton() {
    const toggleButton = document.querySelector('#toggleButton')
    const target = document.querySelector('body')

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleButton.checked = true
      target.classList.add('dark')
    };
    toggleButton.addEventListener('click', () => {
      if (toggleButton.checked) {
        target.classList.add('dark')
      }
      else {
        target.classList.remove('dark')
      }
    })
  }
}

class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";

    $imageInfo.addEventListener('click', (e) => {
      if ($imageInfo.style.display == 'block') {
        e.target === $imageInfo ? this.closeImageInfo() : false
      }
    })

    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      this.getCatInfo(this.data.image.id)
      
    } else {
      this.$imageInfo.style.display = "none";
    }
  }

  closeImageInfo() {
    this.$imageInfo.style.display = 'none'
  }

  async getCatInfo (catId) {
    const catInfo = await api.fetchCatInfo(catId)
    const { name, url, temperament, origin } = catInfo.data
    this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
    this.$imageInfo.style.display = "block";
    const closeButton = this.$imageInfo.querySelector('.close')
    closeButton.addEventListener('click', () => {
      if (this.$imageInfo.style.display === 'block') {
        this.closeImageInfo()
      }
    })
  }
}

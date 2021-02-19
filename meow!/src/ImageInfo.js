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
      const { name, url } = this.data.image
      console.log(this.data)
      this.$imageInfo.innerHTML = `
      <div class="content-wrapper">
        <div class="title">
          <span>${name}</span>
          <div class="close">x</div>
        </div>
        <img src="${url}" alt="${name}"/>        
        <div class="description">
          <div class="temperament">성격 : </div>
          <div class="origin">태생 : </div>
        </div>
      </div>`;
      this.getCatInfo(this.data.image.id)
      this.$imageInfo.style.display = "block";
      const closeButton = this.$imageInfo.querySelector('.close')
      closeButton.addEventListener('click', () => {
        if (this.$imageInfo.style.display === 'block') {
          this.closeImageInfo()
        }
      })
    } else {
      this.$imageInfo.style.display = "none";
    }
  }

  closeImageInfo() {
    this.$imageInfo.style.display = 'none'
  }

  async getCatInfo (catId) {
    const catInfo = await api.fetchCatInfo(catId)
    const { temperament, origin } = catInfo.data
    console.log(temperament, origin)
    const $temperament = this.$imageInfo.querySelector('.temperament')
    const $origin = this.$imageInfo.querySelector('.origin')
    $temperament.innerText += ' ' + temperament
    $origin.innerText += ' ' + origin
  }
}

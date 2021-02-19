import api from './api.js'
const cardWrap = document.querySelector('.card-wrap')

const render = (data) => {
  cardWrap.innerHTML = data.map((cat) => {
    return `
    <div class="card">
      <img data-src=${cat.url}>
    </div>`
  }).join('')
}

const option = {
  threshold : 0.3
}

const io = new IntersectionObserver((entries, obsever) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src
      io.unobserve(entry.target)
    }
  })
}, option)

const observe = () => {
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    io.observe(img)
  })
}

const getData = async () => {
  const {data} = await api.fetchRandomCats()
  render(data)
  observe()
}

getData()

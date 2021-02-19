const api = {
  fetchProduct : fetch('src/data/product.json').then(res => res.json()),
  fetchCategory : fetch('src/data/category.json').then(res => res.json())
}

export default api
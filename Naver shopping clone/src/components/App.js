import api from '../utils/api.js'
import ImageInfo from '../components/imageInfo.js'
import ProductInfo from '../components/productInfo.js'
import Table from './table.js';
import ProductSelector from './productSelector.js'
import SelectedProduct from './selectedProduct.js'

export default class App {
  data = null;
  constructor($target) {
    this.$target = $target
    this.table = new Table({
      $target
    })
    this.imageInfo = new ImageInfo({
      $target : this.table.addColumn(document.createElement('div'))
    })

    this.productInfo = new ProductInfo({
      $target : this.table.addColumn(document.createElement('div'))
    })

    this.productSelector = new ProductSelector({
      $target : this.productInfo.$target,
      onSelectProduct : (product) => {
        this.selectedProduct.setData(product)
      }
    })

    this.selectedProduct = new SelectedProduct({
      $target : this.productInfo.$target
    })

    this.getData() 
  }

  setdata(nextData) {
    this.data = nextData
    this.imageInfo.setData(nextData)
    this.productInfo.setData(nextData)
    this.productSelector.setData(nextData)
  }

  getData = async () => {
    const [product, category] = await Promise.all([api.fetchProduct, api.fetchCategory])
    console.log(product, category)
    this.setdata({product, category})
  }
}
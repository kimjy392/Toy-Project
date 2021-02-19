let instance = null;

export default class App {
  constructor($target) {
    if (instance) return instance
    this.$target = $target
    instance = this
  }
}


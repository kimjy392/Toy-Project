// throttling은 특정 시간이 지나야 다시 이벤트가 실행되도록 만드는 것!

const throttling = new Throttling()

const input = document.querySelector('#throttling')
input.addEventListener('input', (e) => {
  throttling.callback(() => {
    console.log(e.target.value, 'Throttling')
  })
})

function Throttling() {
  this.timer = null
}

Throttling.prototype.callback = function(func) {
  if (!this.timer) {
    this.timer = setTimeout(() => {
      this.timer = null
      func()
    }, 1000)
  }
}
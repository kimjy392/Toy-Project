// 이벤트를 그룹화하여 하나의 이벤트만 발생하도록 하는 기술
// 연이어 호출되는 함수 중에 처음이나 마지막 함수 호출만 하도록 하는 것

const debounce = new Debounce()

const input = document.querySelector('#debounce')
input.addEventListener('input', (e) => {
  debounce.callBack(function() {
    console.log(e.target.value, 'Debounce')
  })
})

function Debounce() {
  this.timer = null
}
Debounce.prototype.callBack = function(func) {
  if (this.timer) {
    clearTimeout(this.timer)
  }

  this.timer = setTimeout(function() {
    func()
  }, 500)
}

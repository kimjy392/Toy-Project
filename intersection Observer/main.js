const boxes = document.querySelectorAll('.box')

const option = {
  root : document.querySelector('.box-wrap'),
  rootMargin : '-5px',
  threshold : 1
}

// root를 box-wrap 엘리먼트로 지정하게 된다면
// 사용자의 viewport에서는 보이지 않지만 box-wrap에서는 상에서는 보이기 때문에 처음 바로 실행된다.

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('red')
      console.log('Tada!')
    }
  })
}, option)
boxes.forEach((box) => {
  io.observe(box)
})


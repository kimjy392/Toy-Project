const $wrapBox = document.querySelector('.wrap-box')
const $result = document.querySelector('#result')
let draggedBox = null;
for (box of $wrapBox.children) {
  console.log(box)
  box.setAttribute('draggable', 'true')

  box.addEventListener('dragstart', (e) => {
    console.log(e.target, 'drag start!')
    e.target.classList.toggle('drag')
    $result.style.border = '3px solid'
    draggedBox = e.target
  })

  box.addEventListener('dragend', (e) => {
    console.log(e.target, 'drag end!')
    e.target.classList.toggle('drag')
    $result.style.border = ''
  })
}

$result.addEventListener('dragover', (e) => {
  e.preventDefault();
})

$result.addEventListener('dragenter', (e) => {
  console.log(e.target.className)
  if (e.target.id === 'result') {
    e.target.style.border = '3px dashed'
  }
})

$result.addEventListener('dragleave', (e) => {
  e.target.style.border = '3px solid'
})

$result.addEventListener('drop', (e) => {
  e.preventDefault()
  if (e.target.id === 'result') {
    e.target.style.border = ''
    $wrapBox.removeChild(draggedBox)
    e.target.appendChild(draggedBox)
  }
})


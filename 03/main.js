const sml = document.getElementById('small')
const mdm = document.getElementById('medium')
const big = document.getElementById('big')

const onClickHandler = (e) => {
  e.stopPropagation()
  console.dir(e.currentTarget.id)
}
// sml.onclick = onClickHandler
// mdm.onclick = onClickHandler
// big.onclick = onClickHandler

sml.addEventListener('click', onClickHandler)
mdm.addEventListener('click', onClickHandler)
big.addEventListener('click', onClickHandler)
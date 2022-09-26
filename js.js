let menu = document.querySelector('.mobile')
let contMenu = document.querySelector('.menuu')

function abriMenu(){
  contMenu.classList.toggle('ativar')
}

menu.addEventListener('click',abriMenu)

const subMenu = document.querySelector('.abri-sub-menu')
const ativar = document.querySelector('.sub-menu')

function abriMenuSub(){
  ativar.classList.toggle('ativarMenu')
}
subMenu.addEventListener('click', abriMenuSub)
let menu = document.querySelector('.mobile')
let contMenu = document.querySelector('.menuu')

function abriMenu(){
  contMenu.classList.toggle('ativar')
}

menu.addEventListener('click',abriMenu)
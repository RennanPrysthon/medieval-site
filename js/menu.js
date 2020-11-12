// Menu
const menu = document.querySelector("#btn-menu")
const menuContainer = document.querySelector('#menu > ul')

window.addEventListener("scroll", () => {
  this.scrollY >= 10 ? 
    document.querySelector("#menu").style.height = "10vh"
   : document.querySelector("#menu").style.height = "14vh"
}, false);

menuContainer.addEventListener("animationend", e => {
  if(e.animationName === "disappears") {
    menuContainer.classList.remove('menuContainer')
    menuContainer.classList.remove('disappears')
  }
})  

menu.addEventListener('click', () => {
  if (menuContainer.classList.contains('menuContainer')) {
    menuContainer.classList.remove('menuContainer')
    menu.classList.remove('fa-times-circle')
    menu.classList.add('fa-bars')
    menu.style.color = '#566364'
  } else {
    menuContainer.classList.add('menuContainer')
    menu.classList.remove('fa-bars')
    menu.classList.add('fa-times-circle')
    menu.style.color = '#FFFFFF'
  }
})

function closeMenu() {
  menuContainer.classList.add('disappears')
}
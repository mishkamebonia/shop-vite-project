// hamburger menu
const openMenu = document.querySelector('#menu')

const menuModal = document.querySelector('.menu-container')
const overlay = document.querySelector('#overlay')

const closeMenu = document.querySelector('#close-menu-btn')


export function hamburgerMenu() {
  openModal()
  closeModal()
}

function openModal() {
  openMenu.addEventListener('click', () => {
    menuModal.style.display = 'block'
    overlay.style.display = 'block'
    document.body.style.overflow = 'hidden'
  })
}

function closeModal() {
  closeMenu.addEventListener('click', close)

  overlay.addEventListener('click', close)

  function close() {
    menuModal.style.display = 'none'
    overlay.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}
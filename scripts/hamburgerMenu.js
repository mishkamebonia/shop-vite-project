// hamburger menu
const openMenu = document.querySelector('#menu')

const menuModal = document.querySelector('.menu-container')
const overlay = document.querySelector('#overlay')

const closeMenu = document.querySelector('#close-menu-btn')

// wishlist
const wishlistBtn = document.querySelector('#wishlist-btn')
const wishlistContent = document.querySelector('.wishlist-content')
const wishlistDropdown = document.querySelector('.wishlist-dropdown')


export function hamburgerMenu() {
  openModal()
  closeModal()
  wishlistContentToggle()
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

function wishlistContentToggle() {
  wishlistBtn.addEventListener('click', () => {
    wishlistContent.classList.toggle('toggle')
    wishlistDropdown.classList.toggle('fa-angle-up')
  })
}
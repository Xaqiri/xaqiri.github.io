let nav__items_expand = document.querySelector('.nav__items-expand')
let nav__items = document.querySelector('.nav__items')

nav__items_expand.addEventListener('click', () => {
  nav__items.classList.toggle('nav__items-expanded')
})

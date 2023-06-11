// import data from "../data.json" assert { type: "json" };

const checkboxes = document.getElementsByClassName('wishlist-checkboxes')

const wrapper = document.querySelector('#wishlist-wrapper')

const badge = document.querySelector('#wishlist-badge')

let wishlistArr = []

export function wishlistedProducts(data) {
  filter(data)
  badge.innerHTML = wishlistArr.length
}

function filter(data) {
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i]
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        wishlistArr.push(data[i])
        badge.innerHTML = wishlistArr.length
        createModal()
      } else {
        const index = wishlistArr.indexOf(data[i])

        if (index > -1) {
          wishlistArr.splice(index, 1)
          badge.innerHTML = wishlistArr.length
          createModal()
        }
      }
    })
  }
}

function createModal(data) {
  wrapper.innerHTML = wishlistArr.map(data => {
    return `<div class="card-item">
    <div class="img-wrapper">
      <img class="img" src="${data.src}" alt="">
    </div>
    <div class="content">
      <div class="row">
        <h6 class="header">${data.productName}</h6>
        <span class=price>${data.price}</span>
      </div>
      <p class="description">${data.description}</p>
      </div>
      <button class="remove-btn">remove from wishlist</button>
  </div>`
  }).join('')
}
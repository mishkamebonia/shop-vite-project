import Data from "../data.json" assert { type: "json" };

export function productQuantity() {
  categoryQuantity()
  brandQuantity()
}

function categoryQuantity() {
  const phones = document.querySelector('#phone-quantity')
  const tablets = document.querySelector('#tablet-quantity')
  const drones = document.querySelector('#drone-quantity')
  const headphones = document.querySelector('#headphone-quantity')
  const audios = document.querySelector('#audio-quantity')
  const computers = document.querySelector('#computer-quantity')
  const cameras = document.querySelector('#camera-quantity')
  const cases = document.querySelector('#case-quantity')
  const tvs = document.querySelector('#tv-quantity')
  const watches = document.querySelector('#watches-quantity')

  const categoryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const counts = {}
  categoryIds.forEach(categoryId => {
    const count = Data.reduce((total, product) => {
      if (product.categoryId === categoryId) {
        return total + 1
      }
      return total
    }, 0)
    counts[categoryId] = count
  })

  phones.innerHTML = counts[1] || 0
  tablets.innerHTML = counts[2] || 0
  tvs.innerHTML = counts[3] || 0
  computers.innerHTML = counts[4] || 0
  headphones.innerHTML = counts[5] || 0
  watches.innerHTML = counts[6] || 0
  cameras.innerHTML = counts[7] || 0
  audios.innerHTML = counts[8] || 0
  cases.innerHTML = counts[9] || 0
  drones.innerHTML = counts[10] || 0
}

export function brandQuantity() {
  const apple = document.querySelector('#apple-quantity')
  const samsung = document.querySelector('#samsung-quantity')
  const hp = document.querySelector('#hp-quantity')
  const dell = document.querySelector('#dell-quantity')
  const sony = document.querySelector('#sony-quantity')
  const lenovo = document.querySelector('#lenovo-quantity')
  const google = document.querySelector('#google-quantity')
  const lg = document.querySelector('#lg-quantity')
  const oneplus = document.querySelector('#oneplus-quantity')
  const acer = document.querySelector('#acer-quantity')

  const brandIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const counts = {}
  brandIds.forEach(brandId => {
    const count = Data.reduce((total, product) => {
      if (product.brandId === brandId) {
        return total + 1
      }
      return total
    }, 0)
    counts[brandId] = count
  })

  apple.innerHTML = counts[1] || 0
  samsung.innerHTML = counts[2] || 0
  hp.innerHTML = counts[3] || 0
  dell.innerHTML = counts[4] || 0
  sony.innerHTML = counts[5] || 0
  lenovo.innerHTML = counts[6] || 0
  google.innerHTML = counts[7] || 0
  lg.innerHTML = counts[8] || 0
  oneplus.innerHTML = counts[9] || 0
  acer.innerHTML = counts[10] || 0
}
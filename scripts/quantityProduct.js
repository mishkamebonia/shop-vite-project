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
  const showMore = document.querySelector('#view-list')
  const hiddenContent = document.querySelector('#hidden-content')
  const dropDown = document.querySelector('.view-more-dropdown')
  const view = document.querySelector('.view')

  showMore.addEventListener('click', () => {
    hiddenContent.classList.toggle('visible')
    view.classList.toggle('view-less')
    dropDown.classList.toggle('fa-chevron-down')
    dropDown.classList.toggle('fa-chevron-up')
  })

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
  const microsoft = document.querySelector('#microsoft-quantity')
  const alienware = document.querySelector('#alienware-quantity')
  const xiaomi = document.querySelector('#xiaomi-quantity')
  const razer = document.querySelector('#razer-quantity')
  const msi = document.querySelector('#msi-quantity')
  const nvidia = document.querySelector('#nvidia-quantity')
  const bose = document.querySelector('#bose-quantity')
  const gopro = document.querySelector('#gopro-quantity')
  const fitbit = document.querySelector('#fitbit-quantity')
  const canon = document.querySelector('#canon-quantity')
  const nintendo = document.querySelector('#nintendo-quantity')
  const sonos = document.querySelector('#sonos-quantity')
  const dji = document.querySelector('#dji-quantity')
  const amazon = document.querySelector('#amazon-quantity')
  const asus = document.querySelector('#asus-quantity')
  const jbl = document.querySelector('#jbl-quantity')

  const brandIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

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

  samsung.innerHTML = counts[1] || 0
  apple.innerHTML = counts[2] || 0
  dell.innerHTML = counts[3] || 0
  hp.innerHTML = counts[4] || 0
  lg.innerHTML = counts[5] || 0
  sony.innerHTML = counts[6] || 0
  lenovo.innerHTML = counts[7] || 0
  google.innerHTML = counts[8] || 0
  acer.innerHTML = counts[9] || 0
  oneplus.innerHTML = counts[10] || 0
  microsoft.innerHTML = counts[11] || 0
  alienware.innerHTML = counts[12] || 0
  xiaomi.innerHTML = counts[13] || 0
  razer.innerHTML = counts[14] || 0
  msi.innerHTML = counts[15] || 0
  nvidia.innerHTML = counts[16] || 0
  bose.innerHTML = counts[17] || 0
  gopro.innerHTML = counts[18] || 0
  fitbit.innerHTML = counts[19] || 0
  canon.innerHTML = counts[20] || 0
  nintendo.innerHTML = counts[21] || 0
  sonos.innerHTML = counts[22] || 0
  dji.innerHTML = counts[23] || 0
  amazon.innerHTML = counts[24] || 0
  asus.innerHTML = counts[25] || 0
  jbl.innerHTML = counts[26] || 0
}
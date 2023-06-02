import Data from "../data.json" assert { type: "json" };

import { renderProductCards } from "./renderCards.js";

let category = []
let brand = []

// all filters
export function productFilters() {
  productQuantity()
  multiRange()
  categoryProduct()
}

function multiRange() {
  const rangeRadios = document.querySelectorAll(".range")

  // range radios
  rangeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      multiRangeFilter()
    })
  })

  // slider range
  const sliderRange = document.querySelector('#slider-range')
  const sliderRangeDisplay = document.querySelector('#slider-range-display')

  sliderRangeDisplay.textContent = sliderRange.value

  sliderRange.addEventListener('input', () => {
    sliderRangeDisplay.textContent = sliderRange.value
  })
}

// multi range filter
export function multiRangeFilter() {
  const range100 = document.querySelector('#range-100')
  const rangeFrom100to500 = document.querySelector('#range-100-500')
  const rangeFrom500to1000 = document.querySelector('#range-500-1000')
  const range1000 = document.querySelector('#range-1000')
  const allRanges = document.querySelector('#range-all')

  const filteredData = Data.filter(data => {
    const productPrice = data.price

    if (range100.checked) {
      if (productPrice <= 100) {
        return productPrice
      }
    }
    if (rangeFrom100to500.checked) {
      if (productPrice >= 100 && productPrice <=500) {
        return productPrice
      }
    }
    if (rangeFrom500to1000.checked) {
      if (productPrice >= 500 && productPrice <= 1000) {
        return productPrice
      }
    }
    if (range1000.checked) {
      if (productPrice <= 1000) {
        return productPrice
      }
    }
    if (allRanges.checked) {
      return productPrice
    }
  })

  renderProductCards(filteredData)
}

// category function
function categoryProduct() {
  const checkboxes = document.querySelectorAll('.category')

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const value = checkbox.value

      if (checkbox.checked) {
        category.push(value)
      } else {
        const index = category.indexOf(value)

        if (index > -1) {
          category.splice(index, 1)
        }
      }

      categoryFilter()
    })
  })
}

function categoryFilter() {
  const filteredData = Data.filter(data => {
    const productCategory = String(data.categoryId)

    const checked = category.includes(productCategory)
    
    return checked
  })
  
  renderProductCards(filteredData)
}

function productQuantity() {
  const phoneQuantity = document.querySelector('#phone-quantity')
  const tabletQuantity = document.querySelector('#tablet-quantity')
  const droneQuantity = document.querySelector('#drone-quantity')
  const headphoneQuantity = document.querySelector('#headphone-quantity')
  const audioQuantity = document.querySelector('#audio-quantity')
  const computerQuantity = document.querySelector('#computer-quantity')
  const cameraQuantity = document.querySelector('#camera-quantity')
  const caseQuantity = document.querySelector('#case-quantity')
  const tvQuantity = document.querySelector('#tv-quantity')
  const watchesQuantity = document.querySelector('#watches-quantity')

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

  phoneQuantity.innerHTML = counts[1] || 0
  tabletQuantity.innerHTML = counts[2] || 0
  tvQuantity.innerHTML = counts[3] || 0
  computerQuantity.innerHTML = counts[4] || 0
  headphoneQuantity.innerHTML = counts[5] || 0
  watchesQuantity.innerHTML = counts[6] || 0
  cameraQuantity.innerHTML = counts[7] || 0
  audioQuantity.innerHTML = counts[8] || 0
  caseQuantity.innerHTML = counts[9] || 0
  droneQuantity.innerHTML = counts[10] || 0
}
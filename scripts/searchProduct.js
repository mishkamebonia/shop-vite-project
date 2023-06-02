import Data from "../data.json" assert { type: 'json' }

import {renderProductCards} from './renderCards.js'

const searchBar = document.querySelector('#search')

let itemsArr = []

export function searchEngine() {
  searchBar.addEventListener('input', () => {
    const inputValue = searchBar.value.toLowerCase()

    itemsArr = []

    for (let i = 0; i < Data.length; i++) {
      const productName = Data[i].productName.toLowerCase()

      if (productName.includes(inputValue)) {
        itemsArr.push(productName)
      } else {
        const index = itemsArr.indexOf(productName)

        if (index > -1) {
          itemsArr.splice(index, 1)
        }
      }
    }

    searchFilter()
  })
}

function searchFilter() {
  const filteredData = Data.filter(data => {
    const productValue = data.productName.toLowerCase()

    const filtered = itemsArr.includes(productValue)
    
    return filtered
  })

  renderProductCards(filteredData)
}
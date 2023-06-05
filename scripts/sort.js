import {renderProductCards} from './renderCards.js'

// sort products
const selectElement = document.querySelector('#select-dropdown')

export function sortCards(data) {
  selectElement.addEventListener('change', () => {
    sortData(data)
    renderProductCards(data)
  })
}

function sortData(data) {
  const selectedValue = selectElement.value;

  switch (selectedValue) {
    case 'price-ascending':
      return data.sort((a, b) => a.price - b.price);
    case 'price-descending':
      return data.sort((a, b) => b.price - a.price);
    case 'rating-ascending':
      return data.sort((a, b) => a.rating - b.rating);
    case 'rating-descending':
      return data.sort((a, b) => b.rating - a.rating);
    default:
      return data.sort((a, b) => a.id - b.id);
  }
}
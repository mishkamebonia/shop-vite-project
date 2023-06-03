import Data from "../data.json" assert { type: "json" };
import { renderProductCards } from "./renderCards.js";

let category = []
let brand = []
let selectedPriceRange = null

// all filters
export function productFilters() {
  multiRange()
  categoryProduct()
  brandProduct()
}

function multiRange() {
  const rangeRadios = document.querySelectorAll(".range")

  // range radios
  rangeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      selectedPriceRange = getSelectedPriceRange()
      applyFilters()
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

function getSelectedPriceRange() {
  const range100 = document.querySelector('#range-100')
  const rangeFrom100to500 = document.querySelector('#range-100-500')
  const rangeFrom500to1000 = document.querySelector('#range-500-1000')
  const range1000 = document.querySelector('#range-1000')
  const allRanges = document.querySelector('#range-all')

  if (range100.checked) {
    return 99;
  }
  if (rangeFrom100to500.checked) {
    return [99, 499];
  }
  if (rangeFrom500to1000.checked) {
    return [499, 999];
  }
  if (range1000.checked) {
    return 999;
  }
  if (allRanges.checked) {
    return null;
  }

  return null;
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

      applyFilters()
    })
  })
}

// brand function
function brandProduct() {
  const checkboxes = document.querySelectorAll('.brand')

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const value = checkbox.value

      if (checkbox.checked) {
        brand.push(value)
        console.log(brand)
      } else {
        const index = brand.indexOf(value)

        if (index > -1) {
          brand.splice(index, 1)
          console.log(brand)
        }
      }

      applyFilters()
    })
  })
}

function applyFilters() {
  const filteredData = Data.filter(data => {
    const productPrice = data.price
    const productCategory = String(data.categoryId)
    const productBrand = String(data.brandId)

    if (
      selectedPriceRange &&
      category.length > 0 &&
      brand.length > 0
    ) {
      if (Array.isArray(selectedPriceRange)) {
        const [minPrice, maxPrice] = selectedPriceRange;
        return (
          productPrice >= minPrice &&
          productPrice <= maxPrice &&
          category.includes(productCategory) &&
          brand.includes(productBrand)
        );
      } else {
        return (
          productPrice <= selectedPriceRange &&
          category.includes(productCategory) &&
          brand.includes(productBrand)
        );
      }
    } else if (selectedPriceRange && category.length > 0) {
      if (Array.isArray(selectedPriceRange)) {
        const [minPrice, maxPrice] = selectedPriceRange;
        return (
          productPrice >= minPrice &&
          productPrice <= maxPrice &&
          category.includes(productCategory)
        );
      } else {
        return (
          productPrice <= selectedPriceRange &&
          category.includes(productCategory)
        );
      }
    } else if (selectedPriceRange && brand.length > 0) {
      if (Array.isArray(selectedPriceRange)) {
        const [minPrice, maxPrice] = selectedPriceRange;
        return (
          productPrice >= minPrice &&
          productPrice <= maxPrice &&
          brand.includes(productBrand)
        );
      } else {
        return (
          productPrice <= selectedPriceRange &&
          brand.includes(productBrand)
        );
      }
    } else if (category.length > 0 && brand.length > 0) {
      return (
        category.includes(productCategory) &&
        brand.includes(productBrand)
      );
    } else if (selectedPriceRange) {
      if (Array.isArray(selectedPriceRange)) {
        const [minPrice, maxPrice] = selectedPriceRange;
        return productPrice >= minPrice && productPrice <= maxPrice;
      } else {
        return productPrice <= selectedPriceRange;
      }
    } else if (category.length > 0) {
      return category.includes(productCategory);
    } else if (brand.length > 0) {
      return brand.includes(productBrand);
    }

    return true;
  });

  renderProductCards(filteredData);
}

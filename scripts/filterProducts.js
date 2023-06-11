import Data from "../data.json" assert { type: "json" };
import { renderProductCards } from "./renderCards.js";

let category = [];
let brand = [];
let selectedPriceRange = null;

// all filters
export function productFilters() {
  multiRange();
  categoryProduct();
  brandProduct();
  rating()
}

function multiRange() {
  const rangeRadios = document.querySelectorAll(".range");

  // range radios
  rangeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      selectedPriceRange = getSelectedPriceRange();
      applyFilters();
    });
  });
}

function getSelectedPriceRange() {
  const range100 = document.querySelector("#range-100");
  const rangeFrom100to500 = document.querySelector("#range-100-500");
  const rangeFrom500to1000 = document.querySelector("#range-500-1000");
  const range1000 = document.querySelector("#range-1000");
  const allRanges = document.querySelector("#range-all");

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
  const checkboxes = document.querySelectorAll(".category");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const value = checkbox.value;

      if (checkbox.checked) {
        category.push(value);
      } else {
        const index = category.indexOf(value);

        if (index > -1) {
          category.splice(index, 1);
        }
      }

      applyFilters();
    });
  });
}

// brand function
function brandProduct() {
  const checkboxes = document.querySelectorAll(".brand");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const value = checkbox.value;

      if (checkbox.checked) {
        brand.push(value);
        console.log(brand);
      } else {
        const index = brand.indexOf(value);

        if (index > -1) {
          brand.splice(index, 1);
          console.log(brand);
        }
      }

      applyFilters();
    });
  });
}

function rating() {
  const checkboxes = document.querySelectorAll(".rating-label");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      console.log(checkbox)
    })
  })
}

function applyFilters() {
  const filteredData = Data.filter((data) => {
    const productPrice = data.price;
    const productCategory = String(data.categoryId);
    const productBrand = String(data.brandId);

    if (selectedPriceRange && category.length > 0 && brand.length > 0) {
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
          productPrice <= selectedPriceRange && brand.includes(productBrand)
        );
      }
    } else if (category.length > 0 && brand.length > 0) {
      return category.includes(productCategory) && brand.includes(productBrand);
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

// slider
function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#EDEDED", "#6F64F8", controlSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromSlider.value = from;
  }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#EDEDED", "#6F64F8", controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#EDEDED", "#6F64F8", toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#EDEDED", "#6F64F8", toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
            to right,
            ${sliderColor} 0%,
            ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
            ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
            ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
            ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
            ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector("#toSlider");
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector("#fromSlider");
const toSlider = document.querySelector("#toSlider");
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");
fillSlider(fromSlider, toSlider, "#EDEDED", "#6F64F8", toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () =>
controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
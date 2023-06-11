import { sortCards } from "./sort.js";
import { wrapperStyle, cardStyle, cardDefaultStyle } from "./cardStyle.js";

// product cards wrapper
const cardsContainer = document.querySelector("#cards-container");

// pagitation buttons wrapper
const pagitationWrapper = document.querySelector("#pagitation-buttons-row");

// Product quantity
const quantityCards = document.querySelector("#card-quantity");
// Result Time
const resultTime = document.querySelector("#result-time");

let rows = 12;
let currentPage = 1;
let buttonRows = 10;

export function renderProductCards(data) {
  const startTime = performance.now();

  const pagitationCards = pagitationRows(data, rows, currentPage);
  cardsContainer.innerHTML = pagitationCards
    .map((e) => {
        return `<div id="${e.id}" class="card">
    <div class="image">
        <img src="${e.src}" alt="Dummy Image" />
    </div>
    <div class="container">
    <div class="main-content">
        <div class="rating-price">
        <p class="rating">${e.rating} <i class="fa-regular fa-star"></i></p>
        <p class="price">${e.price}</p>
        </div>
        <div class="description">
        <h5 id="${e.brandId}">${e.productName}</h5>
        <p>${e.description}</p>
        </div>
    </div>
        <div class="buttons">
        <button class="wishlist">
            <i class="fa-regular fa-heart"></i>
            <p>WISHLIST</p>
        </button>
        <button class="add-cart">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>ADD TO CART</p>
        </button>
        </div>
        </div>
    </div>`;
    })
    .join("");

  PagitationButtons(data, pagitationPages(data, rows));

  sortCards(data);

  wrapperStyle(data);

  currentPage = 1;

  quantityCards.innerHTML = data.length;
  const finishTime = performance.now();
  resultTime.innerHTML = Math.round(finishTime - startTime);
}

// create rows
export function pagitationRows(data, rows, page) {
  const start = (page - 1) * rows;
  const end = start + rows;
  const paginatedItems = data.slice(start, end);

  return paginatedItems;
}

// create pages
export function pagitationPages(data, rows) {
  const pages = Math.ceil(data.length / rows);

  return pages;
}

// create pagitation buttons
function PagitationButtons(data, pages) {
  pagitationWrapper.innerHTML = "";

  let maxLeft = currentPage - Math.floor(buttonRows / 2);
  let maxRight = currentPage + Math.floor(buttonRows / 2);

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = buttonRows;
  }

  if (maxRight > pages) {
    maxLeft = pages - (buttonRows - 1);
    maxRight = pages;
  }

  if (maxLeft < 1) {
    maxLeft = 1;
  }

  let firstButton = document.createElement("button");
  firstButton.classList.add("pagitation-numbers");
  firstButton.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  firstButton.style.background = "#ededed";
  firstButton.value = 1;

  firstButton.addEventListener("click", () => {
    // window.window.scrollTo(0,0)
    currentPage = firstButton.value;
    renderProductCards(data);
  });

  if (pages !== 0) {
    pagitationWrapper.appendChild(firstButton);
  }

  if (currentPage != 1) {
    firstButton.disabled = false;
  } else if ((currentPage = 1)) {
    firstButton.style.opacity = 0.5;
    firstButton.disabled = true;
  }

  for (let page = maxLeft; page <= maxRight; page++) {
    let button = document.createElement("button");
    button.classList.add("pagitation-numbers");
    button.innerText = page;
    button.value = page;

    if (currentPage == page) {
      button.classList.add("active");
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      // window.window.scrollTo(0,0)
      currentPage = page;
      renderProductCards(data);
    });

    pagitationWrapper.appendChild(button);
  }

  let lastButton = document.createElement("button");
  lastButton.classList.add("pagitation-numbers");
  lastButton.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
  lastButton.style.background = "#ededed";
  lastButton.value = pages;

  if (pages != 0) {
    pagitationWrapper.appendChild(lastButton);
  }

  lastButton.addEventListener("click", () => {
    // window.window.scrollTo(0,0)
    currentPage = lastButton.value;
    renderProductCards(data);
  });

  if (currentPage != pages) {
    lastButton.disabled = false;
  } else if (currentPage == pages) {
    lastButton.style.opacity = 0.5;
    lastButton.disabled = true;
  }
}
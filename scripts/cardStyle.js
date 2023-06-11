import {renderProductCards} from './renderCards.js'

const checkbox = document.querySelector('#grid-view')
const cardsContainer = document.querySelector('#cards-container')
const icon = document.querySelector(".grid-icon")

export function wrapperStyle(data) {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      cardsContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
      cardsContainer.style.gridTemplateRows = 'repeat(1, 1fr)';
      icon.classList.remove('fa-border-all');
      icon.classList.add('fa-list-ul');
      cardStyle(data);
    } else {
      cardsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
      cardsContainer.style.gridTemplateRows = 'repeat(4, 1fr)';
      icon.classList.remove('fa-list-ul');
      icon.classList.add('fa-border-all');
      cardDefaultStyle(data);
    }

    // console.log(data)
  });
}

export function cardStyle(data) {
  const cards = document.querySelectorAll('.card');
  const images = document.querySelectorAll('.image');
  const containers = document.querySelectorAll('.container');

  cards.forEach((card, index) => {
    card.style.display = 'flex';
    images[index].style.width = '50%';
    images[index].style.margin = '25px';
    images[index].style.flexBasis = '50%';
    containers[index].style.display = 'flex';
    containers[index].style.flexBasis = '80%';
    containers[index].style.flexDirection = 'column';
    containers[index].style.justifyContent = 'space-between';
  });

  console.log(cards)

  // renderProductCards(data)
}

export function cardDefaultStyle(data) {
  const cards = document.querySelectorAll('.card');
  const images = document.querySelectorAll('.image');

  cards.forEach((card, index) => {
    card.style.display = 'block';
    images[index].style.width = 'auto';
    images[index].style.margin = '25px 25px 0';
  });

  console.log(cards)

  // renderProductCards(data)
}
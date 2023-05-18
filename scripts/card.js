import Data from "../MOCK_DATA.json" assert { type: 'json' }

const cardsContainer = document.querySelector("#cards-container")

let myList

const state = {
    'querySet': Data,
    'rows': 9,
    'page': 1,
}

function pagitation(querySet, rows, page) {
    const start = (page - 1) * rows
    const end = start + rows
    const paginatedItems = querySet.slice(start, end)

    const pages = Math.ceil(querySet.length / rows)

    return {
        'querySet': paginatedItems,
        'page': pages,
    }
}

function pageButtons(pages) {
    const wrapper = document.querySelector('#pagitation')
    wrapper.innerHTML = ''
    
    for (let page = 1; page <= pages; page++) {
        let button = document.createElement('button')
        button.classList.add('page', 'pagitation-numbers')
        button.innerText = page
        button.value = page

        wrapper.appendChild(button)

        if (page === state.page) button.classList.add('active')

        button.addEventListener('click', () => {

            
            let currentPage = page
            const paginationData = pagitation(state.querySet, state.rows, currentPage)
            
            const myList = paginationData.querySet
            
            let currentBtn = document.querySelector('#pagitation button.active')
            currentBtn.classList.remove('active')
            
            button.classList.add('active')
            
            if (currentBtn.value != currentPage) {
                window.window.scrollTo(0,0)
            }

                cardsContainer.innerHTML = myList.map(e => {
                    return `<div id="${e.id}" class="card">
                    <div class="image">
                        <img src="https://dummyimage.com/290x250/000/fff" alt="Dummy Image" />
                    </div>
                    <div class="container">
                        <div class="rating-price">
                        <p class="rating">${e.rating} <i class="fa-regular fa-star"></i></p>
                        <p class="price">$${e.price}</p>
                        </div>
                        <div class="description">
                        <h5 id="${e.brandId}">${e.productName}</h5>
                        <p>${e.description}</p>
                        </div>
                    </div>
                        <div class="buttons">
                        <button id="wishlist">
                            <i class="fa-regular fa-heart"></i>
                            <p>WISHLIST</p>
                        </button>
                        <button id="add-cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <p>ADD TO CART</p>
                        </button>
                        </div>
                    </div>`
                }).join('')
                console.log(paginationData)
            }
        )
    }
}

export function renderProductCards() {
    const data = pagitation(state.querySet, state.rows, state.page)
    console.log('Data:', data)

    myList = data.querySet

    cardsContainer.innerHTML = myList.map(e => {
        return `<div id="${e.id}" class="card">
        <div class="image">
            <img src="https://dummyimage.com/290x250/000/fff" alt="Dummy Image" />
        </div>
        <div class="container">
            <div class="rating-price">
            <p class="rating">${e.rating} <i class="fa-regular fa-star"></i></p>
            <p class="price">$${e.price}</p>
            </div>
            <div class="description">
            <h5 id="${e.brandId}">${e.productName}</h5>
            <p>${e.description}</p>
            </div>
        </div>
            <div class="buttons">
            <button id="wishlist">
                <i class="fa-regular fa-heart"></i>
                <p>WISHLIST</p>
            </button>
            <button id="add-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>ADD TO CART</p>
            </button>
            </div>
        </div>`
    }).join('')

    pageButtons(data.page)
    console.log(data.page)
}
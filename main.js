import Data from "./data.json" assert { type: 'json' }

import {renderProductCards} from './scripts/renderCards.js'

import {searchEngine} from './scripts/searchProduct.js'

import {productFilters} from './scripts/filterProducts.js'


renderProductCards(Data)
searchEngine()
productFilters()
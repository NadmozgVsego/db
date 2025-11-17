import getData from "./getdata"
import renderGoods from "./rendergoods"
import { priceFilters } from "./filters"

const prices = () => {
  const priceMin = document.querySelector('#min.filter-price_input')
  const priceMax = document.querySelector('#max.filter-price_input')

  let valMin = 0
  let valMax = 999999

  priceMax.addEventListener('input', (event) => {
    valMax = event.target.value


    getData().then((data) => {
      renderGoods(priceFilters(data, valMin, valMax))
    })
  })

  priceMin.addEventListener('input', (event) => {
    valMin = event.target.value

    getData().then((data) => {
      renderGoods(priceFilters(data, valMin, valMax))
    })
  })


}

export default prices
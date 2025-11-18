import getData from "./getdata"
import renderGoods from "./rendergoods"
import { priceFilters, hotsaleFilters } from "./filters"

const filter = () => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')
  const cbInput = document.getElementById('discount-checkbox')
  const cbSpan = document.querySelector('.filter-check_checkmark')

  minInput.addEventListener('input', () => {
    console.log(minInput.value);
    console.log(maxInput.value);

    getData().then((data) => {
      renderGoods(priceFilters(hotsaleFilters(data, cbInput.checked), minInput.value, maxInput.value))
    })
  })

  maxInput.addEventListener('input', () => {
    console.log(minInput.value);
    console.log(maxInput.value);

    getData().then((data) => {
      renderGoods(priceFilters(hotsaleFilters(data, cbInput.checked), minInput.value, maxInput.value))
    })
  })

  cbInput.addEventListener('change', () => {
    console.log('change');
    console.log(cbInput.checked);

    if (cbInput.checked) {
      cbSpan.classList.add('checked')
    } else {
      cbSpan.classList.remove('checked')
    }

    getData().then((data) => {
      renderGoods(hotsaleFilters(priceFilters(data, minInput.value, maxInput.value), cbInput.checked))
    })
  })

}

export default filter

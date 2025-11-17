import getData from "./getdata"
import renderGoods from "./rendergoods"
import { categoryFilters } from "./filters"

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button')
  const catalogModal = document.querySelector('.catalog')
  const catalogModalItems = document.querySelectorAll('.catalog li')

  let isOpen = false

  btnCatalog.addEventListener('click', () => {
    isOpen = !isOpen
    catalogModal.style.display = (isOpen ? 'block' : '')
  })

  catalogModalItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent
      getData().then((data) => {
        renderGoods(categoryFilters(data, text))
      })
    })

  })

}

export default catalog
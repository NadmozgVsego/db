import renderCart from "./rendercart"
import postData from "./postdata"

const cart = () => {
  const cartBtn = document.getElementById('cart')
  const cartModal = document.querySelector('.cart')
  const cartCloseBtn = cartModal.querySelector('.cart-close')
  const goodsWrapper = document.querySelector('.goods')
  const cartTotal = cartModal.querySelector('.cart-total > span')
  const cartWrapper = document.querySelector('.cart-wrapper')
  const cartSendBtn = cartModal.querySelector('.cart-confirm')
  const cartCount = cartBtn.querySelector('.counter')


  const closeCart = () => {
    cartModal.style.display = ''
    console.log('bited close')
  }

  const openCart = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    cartModal.style.display = 'flex'
    renderCart(cart)
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0)
  }

  cartBtn.addEventListener('click', openCart)

  cartCloseBtn.addEventListener('click', closeCart)

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card')
      const key = card.dataset.key
      const goods = JSON.parse(localStorage.getItem('goods'))
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
      const goodItem = goods.find((item) => {
        return +item.id === +key // in my case "id" is string
      })
      cart.push(goodItem)
      localStorage.setItem('cart', JSON.stringify(cart))
      cartCount.textContent = cart.length
    }

  })

  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
      const card = event.target.closest('.card')
      const key = card.dataset.key
      console.log(+key)
      const index = cart.findIndex((item) => {
        return +item.id === +key
      })
      console.log(index);

      cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart)
      renderCart(cart)
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price
      }, 0)
      cartCount.textContent = cart.length

    }

  })

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    postData(cart).then(() => {
      localStorage.removeItem('cart')
      renderCart([])
      cartTotal.textContent = 0
    })

  })

  //cartCloseBtn.onclick = closeCart

  /*cartCloseBtn.onclick = function() {
    console.log('bited first')
  }
  
  cartCloseBtn.onclick = () => {
    console.log('bited second')
  }
  
  */
}
export default cart
const cart = () => {
  const cartBtn = document.getElementById('cart')
  const cartModal = document.querySelector('.cart')
  const cartCloseBtn = cartModal.querySelector('.cart-close')

  const closeCart = () => {
    cartModal.style.display = ''
    console.log('bited close')
  }

  const openCart = () => {
    cartModal.style.display = 'flex'
    console.log('bited open')
  }

  /*cartBtn.onclick = function() {
    console.log('bited')
    openCart()
  }*/

  cartBtn.addEventListener('click', openCart)

  //cartCloseBtn.onclick = closeCart

  /*cartCloseBtn.onclick = function() {
    console.log('bited first')
  }
  
  cartCloseBtn.onclick = () => {
    console.log('bited second')
  }
  
  cartCloseBtn.addEventListener('click', () => {
    console.log('bited first')
  })
  
  */

  cartCloseBtn.addEventListener('click', closeCart)

  //console.dir(cartCloseBtn.onclick)

}
export default cart
import getData from "./getdata";
//import postData from "./postdata";
import renderGoods from "./rendergoods";

const load = () => {
  //const cartBtn = document.getElementById('cart')

  getData().then((data) => {
    renderGoods(data)
  })/**/

  /*cartBtn.addEventListener('click', () => {
    postData().then((data) => {
      console.log(data);

      getData().then((data) => {
        console.log(data);
      })
    })
  })*/

}


export default load
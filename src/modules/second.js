import getData from "./getdata";
import postData from "./postdata";

const second = () => {
  const cartBtn = document.getElementById('cart')

  getData().then((data) => {
    console.log(data);
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


export default second
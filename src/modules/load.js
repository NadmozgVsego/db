import getData from "./getdata";
import renderGoods from "./rendergoods";

const load = () => {

  getData().then((data) => {
    renderGoods(data)
  })


}


export default load
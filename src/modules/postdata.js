const postData = (cart) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ cart }),
    /*headers: {
      'Content-Type:': 'application/json; charset=UTF-8',
    },*/
  })
    .then(res => res.json())

}

export default postData

//https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json
// https://jsonplaceholder.typicode.com/posts
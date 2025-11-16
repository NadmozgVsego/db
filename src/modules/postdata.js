const postData = () => {
  return fetch('https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      title: "Вурдалак 4.5",
      price: 9999,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Игры и софт"
    }),
    /*headers: {
      'Content-Type:': 'application/json; charset=UTF-8',
    },*/
  })
    .then(res => res.json())

}

export default postData
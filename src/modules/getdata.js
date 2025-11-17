const getData = () => {

  //console.log(str);
  return fetch(`
    https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
      return response.json()
    })

}

export default getData


/*
`
    https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}
    `
*/
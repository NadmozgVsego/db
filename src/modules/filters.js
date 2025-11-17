export const searchFilters = (goods, value) => {

  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilters = (goods, value) => {

  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })
}

export const priceFilters = (goods, min, max) => {

  console.log(min + '-' + max);


  return goods.filter((goodsItem) => {
    return goodsItem.price >= min && goodsItem.price <= max
  })
}

// return goodsItem.price >= (min === 'undefined' ? 0 : min) && goodsItem.price <= (max === 'undefined' ? 999999 : max)
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

  console.log('from ' + min + ' to ' + max);


  return goods.filter((goodsItem) => {
    return goodsItem.price >= (min === '' ? Number.NEGATIVE_INFINITY : +min) && goodsItem.price <= (max === '' ? Number.POSITIVE_INFINITY : +max)
  })
}

export const hotsaleFilters = (goods, value) => {

  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true
    } else {
      return goodsItem
    }

  })
}


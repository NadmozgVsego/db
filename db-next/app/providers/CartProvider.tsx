'use client'
import { createContext, ReactNode, useContext, useState } from "react"
import { CartContextType } from "../models/cart-context.model"
import { CartItem } from "../models/cart-item.model"
import { Product } from "../models/product.model"

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Оберните в CartProvider')
  }

  return context
}

export default function CartProvider({ children }: { children: ReactNode }) {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [itemsCount, setItemsCount] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const addCartItem = (product: Product) => {
    setCartItems((prev) => {
      const findProduct = cartItems.find(p => p.id === product.id)
      if (findProduct) {
        return prev.map(p => p.id === findProduct.id ? { ...p, count: p.count + 1 } : p)
      } else {
        return [...prev, { ...product, count: 1 }]
      }
    })

    setItemsCount((prev) => { return prev + 1 })
    setTotalPrice((prev) => { return prev + product.price })
  }

  const daleteCartItem = (product: Product) => {
    setCartItems((prev) => {
      const findProduct = cartItems.find(p => p.id === product.id)
      if (findProduct) {
        if (findProduct.count > 1) {
          return prev.map(p => p.id === findProduct.id ? { ...p, count: p.count - 1 } : p)
        } else {
          return prev.filter(p => p.id !== product.id)
        }
      } else {
        return prev
      }
    })

    setItemsCount((prev) => { return prev - 1 })
    setTotalPrice((prev) => { return prev - product.price })
  }

  return (
    <CartContext.Provider value={{ isOpen, itemsCount, totalPrice, cartItems, setIsOpen, addCartItem, daleteCartItem, setItemsCount, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
import { CartItem } from "./cart-item.model"
import { Product } from "./product.model"

export interface CartContextType {
  isOpen: boolean
  itemsCount: number
  totalPrice: number
  cartItems: CartItem[]
  setIsOpen: (value: boolean) => void
  addCartItem: (product: Product) => void
  daleteCartItem: (product: Product) => void
  setItemsCount: (value: number) => void
  setTotalPrice: (value: number) => void
}

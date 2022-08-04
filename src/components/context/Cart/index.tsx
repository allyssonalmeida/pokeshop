import React, {createContext} from 'react';

export type CartItemType = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  price: number
  quantity: number
}
export type CartType = {
  cartItems: CartItemType[]
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
}

export const CartContext= createContext<CartType | null>(null)

export const CartStorage: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [cartItems, setCartItems] = React.useState<CartItemType[]>([])

  React.useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart') || '{}');

    if(cartItems.length === 0 && storeCart.length > 0){
      setCartItems(storeCart);
    }
  }, [])

  React.useEffect(() => {
    if(cartItems.length > 0){
      window.localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems])

  const addToCart = (item: CartItemType) => {
      setCartItems([...cartItems, item]);
  }

  const removeFromCart = () => {
    console.log("Remover Item do carrinho")
  }

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}


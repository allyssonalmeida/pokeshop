import React, {createContext} from 'react';

export type OrderType = {
  items: CartItemType[]
}

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
  placeOrder: () => void;
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
      console.log(cartItems)
    }
  }, [cartItems])

  const addToCart = (item: CartItemType) => {
    const isAdded = cartItems.filter((cartItem) => cartItem.id === item.id)
    if(isAdded.length === 0){
      setCartItems([...cartItems, item]);
    }
  }

  const removeFromCart = (item: CartItemType) => {
    const element = cartItems.indexOf(item);
    let newCart = cartItems;
    newCart.splice(element, 1);
    if(newCart.length > 0){
      setCartItems(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }else{
      setCartItems([]);
      localStorage.setItem('cart', '');
    }
  }

  const placeOrder = () => {
    let orders: string | null = localStorage.getItem('orders')
    if(orders){
      let orderList = JSON.parse(orders)
      localStorage.setItem('orders', JSON.stringify([...orderList, cartItems]))
      setCartItems([])
    }else{
      localStorage.setItem('orders', JSON.stringify([cartItems]))
      setCartItems([])
    }
  }

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, placeOrder}}>
      {children}
    </CartContext.Provider>
  );
}


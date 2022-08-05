import React, { useContext, useEffect, useState } from 'react';
import Trash from '../../../../icons/Trash';
import { CartContext, CartItemType, CartType } from '../../../../context/Cart';
import * as S from './style'


type Props = {
  isActive: boolean,
  toggleMinicart: () => void
}

const Minicart: React.FC<Props> = ({isActive, toggleMinicart}) => {
  const {cartItems, removeFromCart, placeOrder} = useContext(CartContext) as CartType
  const [total, setTotal] = useState(0);

  const formatNumber = (value: number) =>{
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value/100)
  }

  useEffect(() => {
    const sum = cartItems.reduce((prev, current) => {
      return prev + current.price
    }, 0)
    setTotal(sum)
  }, [cartItems])

  const removeItem = (item: CartItemType) => {
    removeFromCart(item)
  }

  const closeMinicart = () => {
    toggleMinicart()
  }

  return (
    <S.Wrapper className={isActive ? 'active': ''}>
      <S.Header>
        <button onClick={closeMinicart}>&times;</button>
        <strong>
          My Cart
        </strong>
      </S.Header>
      <S.MinicartList>
        {cartItems && cartItems.map((item) => (
          <S.Item key={item.name}>
            <img src={item.sprites.front_default} alt={item.name} />
            <div>
              <strong>{item.name}</strong>
              <strong>{formatNumber(item.price)}</strong>
            </div>
            <S.Remove onClick={() => {removeItem(item)}}>
              <Trash />
            </S.Remove>
          </S.Item>
        ))}
      </S.MinicartList>
      <S.Totalizers>
        <S.Summary>
          <strong>Total </strong>
          <div>{formatNumber(total)}</div>
        </S.Summary>
        <S.PlaceOrder>
          <button onClick={() => {console.log("place order"); placeOrder()}}>Place Order</button>
        </S.PlaceOrder>
      </S.Totalizers>
    </S.Wrapper>
  );
}

export default Minicart;
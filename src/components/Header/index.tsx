import React, { useContext } from 'react';
import Logo from '../../icons/Logo';
import { CartContext, CartType } from '../context/Cart';
import * as styled from './style'

const Header: React.FC = () => {
  const {cartItems} = useContext(CartContext)  as CartType
  
  

  return (
    <styled.Header>
      <Logo />
      <styled.Search>
        <input type="text" placeholder="Type your search here..." />
      </styled.Search>
      <div>
        Carrinho: {cartItems.length}
      </div>
    </styled.Header>
  );
}

export default Header;
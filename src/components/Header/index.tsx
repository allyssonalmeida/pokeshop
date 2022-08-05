import React, { useContext } from 'react';
import Logo from '../../icons/Logo';
import { CartContext, CartType } from '../context/Cart';
import * as S from './style'

const Header: React.FC = () => {
  const {cartItems} = useContext(CartContext)  as CartType
  
  

  return (
    <S.Header>
      <S.Top>
        <S.Content>
          <Logo />
          <S.Search>
            <input type="text" placeholder="Type your search here..." />
          </S.Search>
          <div>
            Carrinho: {cartItems.length}
          </div>
        </S.Content>
      </S.Top>
      <S.Bottom />
    </S.Header>
  );
}

export default Header;
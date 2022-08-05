import React, { Fragment, useContext, useState } from 'react';
import Logo from '../../icons/Logo';
import { CartContext, CartType } from '../../context/Cart';
import Minicart from './components/Minicart';
import * as S from './style'
import MinicartIcon from '../../icons/Minicart';


const Header: React.FC = () => {
  const {cartItems} = useContext(CartContext)  as CartType
  const [active, setActive] = useState(false);

  const toggleMinicart = () => {
    setActive(!active);
  }

  return (
    <Fragment>
      <S.Header>
        <S.Top>
          <S.Content>
            <Logo />
            <S.Minicart onClick={toggleMinicart}>
              <MinicartIcon /> {cartItems.length}
            </S.Minicart>
          </S.Content>
        </S.Top>
        <S.Bottom />
      </S.Header>
      <Minicart isActive={active} toggleMinicart={toggleMinicart}/>
    </Fragment>

  );
}

export default Header;
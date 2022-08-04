import React from 'react';
import Logo from '../../icons/Logo';
import * as styled from './style'

const Header: React.FC = () => {
  return (
    <styled.Header>
      <Logo />
      <styled.Search>
        <input type="text" placeholder="Type your search here..." />
      </styled.Search>
    </styled.Header>
  );
}

export default Header;
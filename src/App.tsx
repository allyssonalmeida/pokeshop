import React, { Fragment } from 'react';
import Header from './components/Header';
import './App.scss'
import Home from './pages/Home';
import { CartStorage } from './components/context/Cart';

function App() {
  return (
    <Fragment>
      <CartStorage>
        <Header />
        <main>
          <Home />
        </main>
      </CartStorage>
    </Fragment>
  );
}

export default App;

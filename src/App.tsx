import React, { Fragment } from 'react';
import Header from './components/Header';
import './App.scss'
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
      </main>
    </Fragment>
  );
}

export default App;

import React from 'react';
import { Categories, Footer, Header, Products } from '../components';





const Main = () => {
  return (
    <div className = 'app-wrapper'>
      <div className = 'container container--1430'>
        <Header />
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default Main;
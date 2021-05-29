import React from 'react';
import { Categories, Header, Products } from '../components';





const Main = () => {
  return (
    <div className = 'app-wrapper'>
      <div className = 'container container--1430'>
        <Header />
        <Categories />
        <Products />
      </div>
    </div>
  )
}

export default Main;
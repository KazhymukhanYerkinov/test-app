import React from 'react';
import { HeaderTop, HeaderMid } from '../components';



const Main = () => {
  return (
    <div className = 'app-wrapper'>
      <div className = 'container container--1430'>
        <div className = 'container container--870'>
          <HeaderTop />
          <HeaderMid />
        </div>
      </div>
    </div>
  )
}

export default Main;
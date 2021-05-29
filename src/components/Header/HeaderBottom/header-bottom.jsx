import React from 'react';
import { data } from '../../../data/header-bottom-data';


const HeaderBottom = () => {
  return (
    <div className = 'header-bottom'>
      <div className = 'header-bottom__items'>

        {data.map((item, index) => (
          <div key = { index } className = 'header-bottom__item'> { item.name } </div>
        ))}
        
      </div>
    </div>
  )
}

export default HeaderBottom;
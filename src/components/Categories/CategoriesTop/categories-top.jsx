import React from 'react';
import { categories_top } from '../../../data/categories-top';
import Button from '../../Button/button';


const CategoriesTop = () => {
  return (
    <div className = 'categories-top'>
      <div className = 'categories-top__title'> Костюмные ткани оптом </div>

      <div className = 'categories-top__items'>
        { categories_top.map((item, index) => (
          <Button key = { index } name = {item.name} className = 'button button__categories' />
        )) }
      </div>
    </div>
  )
}

export default CategoriesTop;
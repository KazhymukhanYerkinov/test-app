import React from 'react';
import Button from '../../Button/button';
import Select from '../../Select/select';

const CategoriesMid = () => {
  return (
    <div className = 'categories-mid'>
      <Select one/>
      { data.map((item, index) => (
        <Button key = { index } className = 'button button_categories' name = { item.name }/>
      )) }
    </div>
  )
}

const data = [
  {name: 'Однотон'},
  {name: 'Ткани от рулона'},
  {name: 'Принт'},
  {name: 'Новинки'},
  {name: 'Со скидкой'},
]

export default CategoriesMid;
import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoriesMid from './CategoriesMid/categories-mid';
import CategoriesTop from './CategoriesTop/categories-top';


const Categories = () => {
  return (
    <div className = 'categories'>
      <NavLink to = '/' className = 'categories__breadcrubs'> Ткани оптом / </NavLink>
      <CategoriesTop />
      <CategoriesMid />
    </div>
  )
}

export default Categories;
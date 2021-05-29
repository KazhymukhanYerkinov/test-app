import React from 'react';
import { NavLink } from 'react-router-dom';

import img100 from '../../../../assets/products/100.jpg';
import img101 from '../../../../assets/products/101.jpg';
import img102 from '../../../../assets/products/102.jpg';
import img103 from '../../../../assets/products/103.jpg';
import img104 from '../../../../assets/products/104.jpg';
import img105 from '../../../../assets/products/105.jpg';
import img106 from '../../../../assets/products/106.jpg';



const ProductFooter = () => {
  return (
    <div className = 'product-footer'>
      <div className = 'product-footer__position'>
        <div className = 'product-footer__items'>
          <img className = 'product-footer__item' src = {img100} alt = '' />
          <img className = 'product-footer__item' src = {img101} alt = '' />
          <img className = 'product-footer__item' src = {img102} alt = '' />
          <img className = 'product-footer__item' src = {img103} alt = '' />
          <img className = 'product-footer__item' src = {img104} alt = '' />
          <img className = 'product-footer__item' src = {img105} alt = '' />
          <img className = 'product-footer__item' src = {img106} alt = '' />

          <img className = 'product-footer__item' src = {img105} alt = '' />
          <img className = 'product-footer__item' src = {img106} alt = '' />
        </div>

        <button className = 'product-footer__button'> В корзину </button>
        <NavLink className = 'product-footer__link' to = '/'> Перейти на полную страницу </NavLink>
      </div>
    </div>
  )
}
export default ProductFooter;

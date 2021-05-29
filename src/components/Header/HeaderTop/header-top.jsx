import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';


const HeaderTop = () => {
  return (
    <div className = 'header-top'>
      <div className = 'header-top__logo'>
        <img className = 'header-top__image' src = { logo } alt = '' />
        <div className = 'header-top__title'> FANTTEX </div>
      </div>

      <div className = 'header-top__nav'>
        <div className = 'header-top__links'>
          <NavLink to = '/' className = 'header-top__link'> О компании </NavLink>
          <NavLink to = '/' className = 'header-top__link'> Доставка </NavLink>
          <NavLink to = '/' className = 'header-top__link'> Оплата </NavLink>
          <NavLink to = '/' className = 'header-top__link'> Контакты </NavLink>
        </div>

        <div className = 'header-top__contact'> +7 (383) 263-03-09 </div>
      </div>
    </div>
  )
}

export default HeaderTop;
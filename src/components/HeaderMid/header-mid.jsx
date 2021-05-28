import React from 'react';
import search from '../../assets/icon-search.svg';

// import heart from '../../assets/icon-favorites.svg';
// import orders from '../../assets/icon-orders.svg';
// import profile from '../../assets/icon-profile.svg';
// import cart from '../../assets/icon-cart.svg';





const HeaderMid = () => {
  return (
    <div className = 'header-mid'>
      <form className = 'header-mid__search'>
        <input className = 'header-mid__input' type = 'text' placeholder = 'Поиск по каталогу тканей' />
        <img className = 'icon header-mid__search-icon' src = { search } alt = '' />
      </form>

      {/* <div className = 'header-mid__items'>
        <img src = { heart } alt = 'heart' />
        <img src = { orders } alt = 'orders' />
        <img src = { profile } alt = 'profile' />
        <img src = { cart } alt = 'cart' />
      </div> */}
    </div>
  )
}

// 560 / 72

export default HeaderMid;
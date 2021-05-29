import React from 'react';
import cls from 'classnames';
import { NavLink } from 'react-router-dom';
import search from '../../../assets/icon-search.svg';
import close from '../../../assets/icon-cross.svg';
import right_arrow from '../../../assets/icon-arrow-right.svg';



import { icons } from '../../../data/icons';
import { history_requests, top_requests } from '../../../data/requests';







const HeaderMid = ({ search_ref, show_search, activateSearch }) => {

  const [ value, set_value ] = React.useState('');
  const [ is_empty, set_is_empty ] = React.useState(true);

  const handleChangeValue = (e) => {
    set_value(e.target.value)

    if (e.target.value !== '') {
      set_is_empty(false);
    }
    else {
      set_is_empty(true)
    }
  }

  const handleClearValue = () => {
    set_value('');
    set_is_empty(true);
  }

  const cls_header_search = cls('header-mid__search', {'header-mid__search--shadow': show_search});
  const cls_header_input = cls('header-mid__input', {'header-mid__input--white': show_search});
  const cls_search = cls('search', {'open': show_search});

  


  return (
    <div className = 'header-mid'>
      <form className = {cls_header_search } ref = { search_ref }>
        <input
          type = 'text'
          value = { value }
          className = { cls_header_input } 
          onFocus = { activateSearch } 
          onChange = { handleChangeValue }
          placeholder = 'Поиск по каталогу тканей' />
        
        <div className = 'header-mid__search-icon'>
          { is_empty
          ? <div className = 'icon__block'>
              <img className = 'icon' src = { search } alt = 'search' />
            </div>
          : <React.Fragment>

              <div className = 'icon__block'>
                <img onClick = { handleClearValue } className = 'icon' src = { close } alt = 'close' />
              </div>

              <div className = 'icon__block icon__block--20'>
                <img className = 'icon' src = { right_arrow } alt = 'right arrow' />
              </div>

            </React.Fragment>}
           
        </div>

        <div className = {cls_search}>
          <div className = 'search__requests'>

            <div className = 'search__request'>
              <div className = 'search__request-title'> История поиска </div>
              {history_requests.map((item, index) => (
                <div key = { index } className = 'search__request-text'> { item.name } </div>
              )) }
            </div>

            <div className = 'search__request'>
              <div className = 'search__request-title'> Популярные запросы </div>
              {top_requests.map((item, index) => (
                <div key = { index } className = 'search__request-text'> { item.name } </div>
              )) }
            </div>

          </div>
        </div>

      </form>

      <div className = 'header-mid__items'>

        { icons.map((item, index) => (
          <NavLink key = { index } className = 'icon__block' to = {`/${item.url}`} >
            <span className = 'icon'> {item.img} </span>
            {item.counter && <div className = 'icon__counter'> { item.counter } </div>}
          </NavLink>
        ))}

      </div>
    </div>
  )
}

// 560 / 72

export default HeaderMid;
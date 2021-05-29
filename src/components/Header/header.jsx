import React from 'react';
import cls from 'classnames';
import HeaderBottom from './HeaderBottom/header-bottom';
import HeaderMid from './HeaderMid/header-mid';
import HeaderTop from './HeaderTop/header-top';



const Header = () => {
  const search_ref = React.useRef();
  const [ show_search, set_show_search ] = React.useState(false);

  const activateSearch = () => {
    set_show_search(true);
  }

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(search_ref.current)) {
      set_show_search(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, [])

  const cls_container = cls('container', {'container--1200': show_search, 'container--885': !show_search})

  return (
    <div className={cls_container}>
      <HeaderTop />
      <HeaderMid
        search_ref = { search_ref }
        show_search = { show_search } 

        activateSearch = { activateSearch }
      />
      <HeaderBottom />
    </div>
  )
}

export default Header;
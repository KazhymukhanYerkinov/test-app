import React from 'react';
import cls from 'classnames';
import dropdown from '../../assets/icon-arrow-dropdown.svg';

const Select = ({ one, multiple }) => {
  const select_ref = React.useRef();
  const [open, set_open] = React.useState(false);
  const [selected, set_selected] = React.useState([]);

  const openSelect = () => {
    set_open((is_prev) => !is_prev);
  }

  const handleSelectOne = (object) => {
    set_selected([object]);
    set_open(true);

  }

  const handleOutsideSelect = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(select_ref.current)) {
      set_open(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideSelect);
    return () => {
      document.body.removeEventListener('click', handleOutsideSelect);
    }
  }, [])

  const is_zero = selected.length === 0;
  const is_one = selected.length === 1;


  const cls_select = cls('select', { 'open': open, 'selected': one && is_one })
  const cls_select_logo = cls('select__logo', { 'open': open });

  return (
    <div ref={select_ref} className={cls_select} onClick={openSelect}>

      <div className='select__name'>
        {is_zero ? <span> По популярности </span>
          : is_one ? <span> {selected[0].name} </span>
            : <span> {selected.length} </span>}
      </div>

      <img className={cls_select_logo} src={dropdown} alt='' />

      {one && <OptionsSimple open={open} handleSelectOne={handleSelectOne} />}
    </div>
  )
}

const OptionsSimple = ({ open, handleSelectOne }) => {

  const cls_select_options = cls('select__options', { 'open': open })

  return (
    <div className={cls_select_options}>
      { popular_filter.map((item, index) => (
        <div key={index} onClick={() => handleSelectOne(item)} className='option option__simple'> { item.name} </div>
      ))}
    </div>
  )
}


const popular_filter = [
  { id: 1, name: 'По популярности' },
  { id: 2, name: 'По возрастанию цены' },
  { id: 3, name: 'По убыванию цены' },
]

export default Select;
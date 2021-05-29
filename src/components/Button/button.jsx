import cls from 'classnames';
import React from 'react';
import clear from '../../assets/icon-cross.svg';


const Button = ({ name }) => {
    const [active, set_active] = React.useState(false);

    const activeButton = () => {
        set_active(true);
    }
    const deactivateButton = () => {
        set_active(false);
    }

    const cls_button = cls('button', 'button__categories', {'active': active});
    const cls_button_clear = cls('button__clear', {'active': active})

    return (
        <button className = { cls_button }>
            <div className = 'button__text' onClick = { activeButton }> { name } </div>

            <div className = {cls_button_clear} onClick = { deactivateButton }>
                <img className = 'button__clear-image' src = { clear } alt = '' />
            </div>
        </button>
    )
}

export default Button;
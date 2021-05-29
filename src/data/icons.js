import { ReactComponent as Heart } from '../assets/icon-favorites.svg';
import { ReactComponent as Order } from '../assets/icon-orders.svg';
import { ReactComponent as Profile } from '../assets/icon-profile.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';

export const icons = [
    {img: <Heart />, url: 'heart', counter: 2},
    {img: <Profile />, url: 'profile', counter: null},
    {img: <Order />, url: 'order', counter: 13},
    {img: <Cart />, url: 'cart', counter: null},
]
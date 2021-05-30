import React from 'react';
import { NavLink } from 'react-router-dom';

import vk from '../../assets/icon-social-vk.svg';
import fb from '../../assets/icon-social-fb.svg';
import tw from '../../assets/icon-social-tw.svg';
import tg from '../../assets/icon-social-tg.svg';
import ok from '../../assets/icon-social-ok.svg';




const Footer = () => {
  return (
    <div className='footer'>
      <div className='container container--1430'>
        <div className='container container--1200'>
          <div className='footer__inner'>

            <div className='footer__nav'>
              <NavLink to='/' className='footer__link'> Все ткани оптом и в розницу </NavLink>
              <NavLink to='/' className='footer__link'> Ткани по названию </NavLink>
              <NavLink to='/' className='footer__link'> Блузочные ткани </NavLink>
              <NavLink to='/' className='footer__link'> Костюмные ткани </NavLink>
              <NavLink to='/' className='footer__link'> Пальтовые ткани </NavLink>
              <NavLink to='/' className='footer__link'> Плательные ткани </NavLink>
              <NavLink to='/' className='footer__link'> Плащевые ткани </NavLink>
              <NavLink to='/' className='footer__link'> Подкладочные ткани </NavLink>
              <NavLink to='/' className='footer__link'> Трикотаж оптом и в розницу </NavLink>

            </div>

            <div className='footer__nav'>
              <NavLink to='/' className='footer__link'> Оплата </NavLink>
              <NavLink to='/' className='footer__link'> Доставка </NavLink>
              <NavLink to='/' className='footer__link'> Контакты </NavLink>
              <NavLink to='/' className='footer__link'> О компании </NavLink>
              <NavLink to='/' className='footer__link'>  </NavLink>
              <NavLink to='/' className='footer__link'> Заказы </NavLink>
              <NavLink to='/' className='footer__link'> Понравилось </NavLink>
              <NavLink to='/' className='footer__link'> Личный кабинет </NavLink>
              <NavLink to='/' className='footer__link'> Корзина </NavLink>
            </div>

            <div className='footer__nav'>
              <NavLink to='/' className='footer__link footer__link--social'> <img src={vk} alt='vk' />  Вконтакте </NavLink>
              <NavLink to='/' className='footer__link footer__link--social' > <img src={fb} alt='vk' /> Facebook </NavLink>
              <NavLink to='/' className='footer__link footer__link--social'> <img src={tw} alt='vk' /> Twiter </NavLink>
              <NavLink to='/' className='footer__link footer__link--social'> <img src={tg} alt='vk' /> Telegram </NavLink>
              <NavLink to='/' className='footer__link footer__link--social'> <img src={ok} alt='vk' /> Одноклассники </NavLink>
            </div>

            <div className='footer__nav'>
              <NavLink to='/' className='footer__link'> Переключить сайт на мобильную версию </NavLink>
              <NavLink to='/' className='footer__link'>  </NavLink>
              <NavLink to='/' className='footer__link'> 630015, г. Новосибирск, ул. Электрозаводская, д.2 к.1 </NavLink>
              <NavLink to='/' className='footer__link'> +7 (383) 263-03-09 </NavLink>
              <NavLink to='/' className='footer__link'> info@fanttex.ru </NavLink>
              <NavLink to='/' className='footer__link'> Политика конфиденциальности </NavLink>
              <NavLink to='/' className='footer__link'> 2016 — 2020 © ООО «ФАНТАЗИЯ», ИНН 5401966520. Все права защищены. </NavLink>
              <NavLink to='/' className='footer__link'>  </NavLink>

              <NavLink to='/' className='footer__link'> Создание, продвижение и поддержка </NavLink>
              <NavLink to='/' className='footer__link bold'> <b>Кирилл Царенко</b> </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}




export default Footer;
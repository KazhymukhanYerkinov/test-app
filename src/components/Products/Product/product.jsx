import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import first from '../../../assets/products/001.jpg';
import second from '../../../assets/products/002.jpg';
import third from '../../../assets/products/003.jpg';
import ProductFooter from './ProductFooter/product-footer';



const Product = () => {

  return (
    <div className = 'product'>
      <Swiper>
        <SwiperSlide>
          <img className = 'product__image' src = { first } alt = '' />
        </SwiperSlide>

        <SwiperSlide>
          <img className = 'product__image' src = { second } alt = '' />
        </SwiperSlide>

        <SwiperSlide> 
          <img className = 'product__image' src = { third } alt = '' />
        </SwiperSlide>
      </Swiper>

      <div className = 'product__info'>
        <div className = 'product__date'> 01.139.04 </div>
        <div className = 'product__name'> Футер 3х-нитка, петля-диагональ, пенье </div>
        <div className = 'product__price'> от <b>37895</b> руб./м </div>
      </div>

      <div className = 'product__footer'>
        <ProductFooter />
      </div>

      
    </div>
  )
}

export default Product
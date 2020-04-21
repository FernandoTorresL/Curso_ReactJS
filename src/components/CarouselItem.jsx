import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://i.imgur.com/8w2uBbN.jpg'
      alt='Tech Team'
    />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>Título provisional</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 10 minutos</p>
    </div>
  </div>
);

export default CarouselItem;

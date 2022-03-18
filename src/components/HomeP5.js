import React from 'react';
import '../App.css';
import { Button } from './Button';

import CardItem from './CardItem';

import './cardsP5.css';

function HomeP5() {
  return (
    <div className='cards'>
      <h1>Be part of the next revolution of coffee <br></br> and enjoy
the following benefits</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/icons/1.png'
              text='Save Up To 6000 AED a year'
            />
            <CardItem
              src='../images/icons/2.png'
              text='Easy Access through our
              “All in One App” Feature'
            />

<CardItem
              src='../images/icons/3.png'
              text='Highest Reward System Conversion 
              Ratio in the Coffee Industry'
            />
            <CardItem
              src='../images/icons/4.png'
              text='Faster Transactions with
              a Single Click'
            />
            <CardItem
              src='../images/icons/5.png'
              text='Explore quality cafes, hand-
              selected by our coffee experts'
            />
          </ul>
          <ul className='cards__items'>

          </ul>
        </div>
      </div>
    </div>
  );
}
export default HomeP5;

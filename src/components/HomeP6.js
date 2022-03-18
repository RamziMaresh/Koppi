import React from 'react';
import '../App.css';
import './Slider.css';

import Item from "./item";


import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";

import Carousel from "react-elastic-carousel";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function HomePart6() {
  return (
    <>


   
      <div className="HomeP6">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src='/images/partners/1.png' />
          </Item>
          <Item>
          <img src='/images/partners/2.png' />
          </Item>
          <Item>
          <img src='/images/partners/3.png' />
          </Item>
          <Item>
          <img src='/images/partners/4.png' />
          </Item>
          <Item>
          <img src='/images/partners/6.png' />
          </Item>
          <Item>
          <img src='/images/partners/7.png' />
          </Item>
          <Item>
          <img src='/images/partners/8.png' />
          </Item>
          <Item>
          <img src='/images/partners/9.png' />
          </Item>
        </Carousel>
      </div> 

    
    </>

    
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<HomePart6 />, rootElement);

export default HomePart6;

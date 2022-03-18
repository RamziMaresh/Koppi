import React from 'react';
import'../../App.css';
import Slider from '../Slider';
import HomeP2 from '../HomeP2';
import HomeP3 from '../HomeP3';
import HomeP4 from '../HomeP4';
import HomeP5 from '../HomeP5';
import HomeP5b from '../HomeP5b';
import HomeP6 from '../HomeP6';



function Home (){
    return(
        <>
          <Slider />
          <HomeP2 />
          <HomeP3 />
          <HomeP4 />
          <HomeP5 />
          <HomeP5b />

          <HomeP6 />

        </>
    )
}


export default Home;
import React from 'react'
import './Home.css';
import Product from "./Product";
function Home() {
  return (
    <div className="home__imgcontainer">
      <img className="home__img" src="https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg" alt=""/>
      <div className="home__row">
        <Product id="12321341"
        title="Turtle Beach Stealth 600 Gen 2 USB Wireless Amplified Gaming Headset - Licensed for Xbox Series X, Xbox Series S, & Xbox One - 24+ Hour Battery, 50mm Speakers, Flip-to-Mute Mic, Spatial Audio - White"
        price={89.94}
        rating={5}
        image="https://m.media-amazon.com/images/I/81uZ6ShhXCL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product id="12321341"
        title="Turtle Beach Stealth 600 Gen 2 USB Wireless Amplified Gaming Headset - Licensed for Xbox Series X, Xbox Series S, & Xbox One - 24+ Hour Battery, 50mm Speakers, Flip-to-Mute Mic, Spatial Audio - White"
        price={89.94}
        rating={5}
        image="https://m.media-amazon.com/images/I/81uZ6ShhXCL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      
    </div>
  )
}

export default Home
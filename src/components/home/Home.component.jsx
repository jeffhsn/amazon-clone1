import React from 'react';
import Product from '../product/Product.component';
import './Home.styles.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer"
            price={239.0}
            rating={4}
            image="https://dam.kenwoodworld.com/562x468/assets/148434"
          />
        </div>

        <div className="home__row">
          <Product
            id="49573594"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={10900.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="12321341"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41hX+2Es+vL._AC_.jpg"
          />
          <Product
            id="49573594"
            title="Mi Notebook Air"
            price={999.0}
            rating={4}
            image="https://media.nbb-cdn.de/product_images/listing_image/Xiaomi-Mi-Laptop-Air-QWERTY-Tastatur-p480517?size=400"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

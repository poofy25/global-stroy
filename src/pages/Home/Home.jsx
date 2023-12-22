import styles from './home.module.css'
import Slider from 'react-slick';

import heroimg1 from '/src/assets/home.png'
import heroimg2 from '/src/assets/home_2.png'
import heroimg3 from '/src/assets/home_3.png'
import heroimg4 from '/src/assets/home_4.png'


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';

function HomePage({navStatus , setNavStatus}) {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows:false,
        draggable:true,
        swipe:true,
        touchThreshold:10000000,
        touchMove:true,
        fade:true,

    };
    const translation = getTranslation(getLangFromUrl()).home
    const location = useLocation()
    useEffect(()=>{
    },[location])



    useEffect(()=>{
      setNavStatus(true)
    },[])

    
    return ( 

    <section className={styles.homePage}>


        <Slider {...settings}>
          <div className={styles.section}>
            <img src={heroimg1} alt='Apartament Interior'/>
            <h1>{translation.slide1}</h1>
            <a href='/lucrari'>{translation.btn}</a>
          </div>
          <div className={styles.section}>
          <img src={heroimg2} alt='Apartament Interior'/>
            <h1>{translation.slide2}</h1>
            <a href='/lucrari'>{translation.btn}</a>
          </div>
          <div className={styles.section}>
          <img src={heroimg3} alt='Apartament Interior'/>
            <h1>{translation.slide3}</h1>
            <a href='/lucrari'>{translation.btn}</a>
          </div>
          <div className={styles.section}>
          <img src={heroimg4} alt='Apartament Interior'/>
            <h1>{translation.slide4}</h1>
            <a href='/lucrari'>{translation.btn}</a>
          </div>
          
        </Slider>



    </section>    


    );
}

export default HomePage;
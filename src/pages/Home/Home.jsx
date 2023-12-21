import styles from './home.module.css'
import Slider from 'react-slick';

import heroimg1 from '/src/assets/home.png'
import heroimg2 from '/src/assets/home_2.png'
import heroimg3 from '/src/assets/home_3.png'
import heroimg4 from '/src/assets/home_4.png'


import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
    const navigateTo = useNavigate()

    useEffect(()=>{
      setNavStatus(true)
    },[])

    
    return ( 

    <section className={styles.homePage}>


        <Slider {...settings}>
          <div className={styles.section}>
            <img src={heroimg1}/>
            <h1>REPARAȚIA APARTAMENTELOR LA CHEIE</h1>
            <a href='/lucrari'>Lucrarile Noastre</a>
          </div>
          <div className={styles.section}>
          <img src={heroimg2}/>
            <h2>Efectuarea reparățiilor de interior și dizain a casei tale.</h2>
            <a href='/lucrari'>Lucrarile Noastre</a>
          </div>
          <div className={styles.section}>
          <img src={heroimg3}/>
            <h2>Ajutor în alegerea unei opțiuni corespunzătoare dumneavoastră.</h2>
            <a href='/lucrari'>Lucrarile Noastre</a>
          </div>
          <div className={styles.section}>
          <img src={heroimg4}/>
            <h2>Global-Stroy execută reparații profesionale de calitate înaltă și prețuri accesibile, servind clienții cu profesionalism.</h2>
            <a href='/lucrari'>Lucrarile Noastre</a>
          </div>
          
        </Slider>



    </section>    


    );
}

export default HomePage;
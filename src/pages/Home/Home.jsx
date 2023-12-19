import styles from './home.module.css'
import Slider from 'react-slick';

import heroimg from '/src/assets/hero.png'


import { useNavigate } from 'react-router-dom';


function HomePage() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        arrows:false,
        draggable:true,
        swipe:true,
        touchThreshold:100,

    };
    const navigateTo = useNavigate()




    
    return ( 

    <section className={styles.homePage}>


        <Slider {...settings}>
          <div className={styles.section}>
            <img src={heroimg}/>
            <h3>1</h3>
            <a href='/lucrari'>Vezi Lucrarile Noastre</a>
          </div>
          <div className={styles.section}>
            <h3>2</h3>
            <a href='/lucrari'>Vezi Lucrarile Noastre</a>
          </div>
          <div className={styles.section}>
            <h3>3</h3>
            <a href='/lucrari'>Vezi Lucrarile Noastre</a>
          </div>
          <div className={styles.section}>
            <h3>4</h3>
            <a href='/lucrari'>Vezi Lucrarile Noastre</a>
          </div>
          
        </Slider>



    </section>    


    );
}

export default HomePage;
import styles from './home.module.css'
import Slider from 'react-slick';

import heroimg from '/src/assets/hero.png'


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
        fade:true,
        swipe:true,
        touchThreshold:15,

      };




    
    return ( 

    <section className={styles.homePage}>


        <Slider {...settings}>
          <div className={styles.section}>
            <img src={heroimg}/>
            <h3>1</h3>
          </div>
          <div className={styles.section}>
            <h3>2</h3>
          </div>
          <div className={styles.section}>
            <h3>3</h3>
          </div>
          <div className={styles.section}>
            <h3>4</h3>
          </div>
          
        </Slider>



    </section>    


    );
}

export default HomePage;
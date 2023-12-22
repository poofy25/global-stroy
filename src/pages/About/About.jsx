import styles from './about.module.css'
import banner from '/src/assets/img/banner.png'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';


import Footer from '../../components/Footer/Footer';
function AboutPage({setNavStatus}) {

    const translation = getTranslation(getLangFromUrl()).about
    const location = useLocation()
    useEffect(()=>{
    },[location])

    useEffect(()=>{
        setNavStatus(false)
    },[])
    return ( 
        <>
        <section className={styles.section}>
            <header className={styles.header}>
                <img src={banner} alt='Banner'/>
                <h1>{translation.header}</h1>
                <h3>Global Stroy</h3>
            </header>
            <p>{translation.paragraph1}
            <br/>{translation.paragraph2}
            <br/>{translation.paragraph3}
            <br/>{translation.paragraph4}
            <br/>{translation.paragraph5}</p>
           
        </section>
        <Footer/>
        </>
     );
}

export default AboutPage;
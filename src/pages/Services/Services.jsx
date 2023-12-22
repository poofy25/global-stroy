import styles from './services.module.css'
import banner from '/src/assets/img/banner.png'

import { LazyLoadImage , LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import service01 from '/src/assets/img/services/services_01.png'
import service02 from '/src/assets/img/services/services_02.png'
import service03 from '/src/assets/img/services/services_03.png'
import service04 from '/src/assets/img/services/services_04.png'
import service05 from '/src/assets/img/services/services_05.png'
import service06 from '/src/assets/img/services/services_06.png'
import service07 from '/src/assets/img/services/services_07.png'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';


import Footer from '../../components/Footer/Footer';
function ServicesPage({setNavStatus}) {


    const translation = getTranslation(getLangFromUrl()).services
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
                <img src={banner}/>
                <h2>{translation.header}</h2>
                <h3>Global Stroy</h3>
            </header>
            <LazyLoadComponent>
            <article className={styles.article}>
            <a href='/contact'>
                    <img src={service01}/>
                    <h2>{translation.article1}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
            <a href='/contact'>
                    <img src={service02} />
                    <h2>{translation.article1}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
            <a href='/contact'>
                    <img src={service03}/>
                    <h2>{translation.article2}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
             <article className={styles.article}>
             <a href='/contact'>
                    <img src={service04}/>
                    <h2>{translation.article3}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
            <a href='/contact'>
                    <img src={service05} />
                    <h2>{translation.article5}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/contact'>
                    <img src={service06} />
                    <h2>{translation.article6}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/contact'>
                    <img src={service07} />
                    <h2>{translation.article7}</h2>
                    <p>{translation.articleSublineText}</p>
                </a>
            </article>
            </LazyLoadComponent>
        </section>
        <Footer/>
        </>
     );
}

export default ServicesPage;
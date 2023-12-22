import styles from './contact.module.css'
import Footer from '../../components/Footer/Footer';

import banner from '/src/assets/img/banner.png'
import callIcon from '/src/assets/svg/call.svg'
import emailIcon from '/src/assets/svg/email.svg'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';

function ContactPage({setNavStatus}) {



    const translation = getTranslation(getLangFromUrl()).contact
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
                <h2>{translation.header}</h2>
                <h3>Global Stroy</h3>
            </header>           

            <article>
                <h3>Dumitru Ignat</h3>
                <p>{translation.title}</p>
                <span className={styles.call}><a href='tel:+37360927221'> <span><img alt='call icon' src={callIcon}/></span><p>060927221</p></a></span>
                <span className={styles.call}><a href='mailto:global-stroy@internet.ru'> <span><img alt='email icon' src={emailIcon}/></span><p>global-stroy@internet.ru</p></a></span>

            </article>
        </section>
        <Footer/>
        </>
     );
}

export default ContactPage;
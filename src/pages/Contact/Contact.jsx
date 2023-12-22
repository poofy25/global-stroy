import styles from './contact.module.css'
import Footer from '../../components/Footer/Footer';

import banner from '/src/assets/img/banner.png'
import callIcon from '/src/assets/svg/call.svg'
import emailIcon from '/src/assets/svg/email.svg'



import { useEffect } from 'react';
function ContactPage({setNavStatus}) {
    useEffect(()=>{
        setNavStatus(false)
    },[])
    return ( 
        <>
        <section className={styles.section}>
            <header className={styles.header}>
                <img src={banner}/>
                <h2>Contacte</h2>
                <h3>Global Stroy</h3>
            </header>           

            <article>
                <h3>Dumitru Ignat</h3>
                <p>Manager de Proiect</p>
                <span className={styles.call}><a href='tel:+37360927221'> <span><img src={callIcon}/></span><p>060927221</p></a></span>
                <span className={styles.call}><a href='mailto:global-stroy@internet.ru'> <span><img src={emailIcon}/></span><p>global-stroy@internet.ru</p></a></span>

            </article>
        </section>
        <Footer/>
        </>
     );
}

export default ContactPage;
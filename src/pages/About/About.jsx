import styles from './about.module.css'
import banner from '/src/assets/img/banner.png'

import { useEffect } from 'react';

import Footer from '../../components/Footer/Footer';
function AboutPage({setNavStatus}) {
    useEffect(()=>{
        setNavStatus(false)
    },[])
    return ( 
        <>
        <section className={styles.section}>
             <header className={styles.header}>
                <img src={banner}/>
                <h1>Reparatia caselor si apartamentelor in Chisinau, Moldova.</h1>
                <h3>Global Stroy</h3>
            </header>
            <p><b>Echipă de profesioniști</b>, efectuam lucrări de reparație de 10 ani în toate orașele din Moldova. 
            <br/>Lucrările sunt efectuate <b>calitativ și la timp.</b> 
            <br/>Elaborăm plan strategic de lucru, care se îndeplinește conform cerințelor clienților.
            <br/>Efectuam lucrări de decor, finish, încălzire, montare, etc.
            <br/><b>Oferim 30% reducere la materialele.</b></p>
           
        </section>
        <Footer/>
        </>
     );
}

export default AboutPage;
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


function ServicesPage() {
    return ( 
        <section className={styles.section}>
             <header className={styles.header}>
                <img src={banner}/>
                <h2>Servicii</h2>
                <h3>Global Stroy</h3>
            </header>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/servicii/lucrari-decorative'>
                    <img src={service01}/>
                    <h2>Asezarea Teracotei</h2>
                    <p>Mai Multe Detalii...</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/servicii/tencuiala'>
                    <img src={service02} />
                    <h2>Tencuială</h2>
                    <p>Mai Multe Detalii...</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/serviciis/sapa'>
                    <img src={service03}/>
                    <h2>Șapă</h2>
                    <p>Mai Multe Detalii...</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
             <article className={styles.article}>
                <a href='/servicii/instalatii-sanitare'>
                    <img src={service04}/>
                    <h2>Instalații sanitare</h2>
                    <p>Mai Multe Detalii...</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/servicii/reteua-electrica'>
                    <img src={service05} />
                    <h2>Rețeua electrică</h2>
                    <p>Mai Multe Detalii...</p>
                </a>
            </article>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <article className={styles.article}>
                <a href='/servicii/decorarea-peretilor'>
                    <img src={service06} />
                    <h2>Decorarea pereților</h2>
                    <p>Mai Multe Detalii...</p>
                </a>
            </article>
            </LazyLoadComponent>
        </section>
     );
}

export default ServicesPage;
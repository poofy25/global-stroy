import styles from './work.module.css'

import workContent from './workContent';
import banner from '/src/assets/img/banner.png'
import Footer from '../../components/Footer/Footer';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';



function WorkPage({setNavStatus}) {

    const translation = getTranslation(getLangFromUrl()).work
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
            </header>
            {
                Object.keys(workContent).map((key, index) => {
                    const article = workContent[key]
                    return(
                        <a href={`/lucrari/${key}`} className={styles.article} key={index}>
                        <img src={article.img[0]} alt='Serviciu imagine'/>
                        <p>{article.name}</p>
                        </a>
                    )

                })
            }
        </section>
        <Footer/>
        </>
     );
}

export default WorkPage;
import styles from './workArticle.module.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import workContent from './workContent';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Footer from '../../components/Footer/Footer';

function WorkArticle({setNavStatus}) {

    const params = useParams()
    const data = workContent[params.id]

    useEffect(()=>{
        setNavStatus(false)
    },[])

    return ( 
        <>
        <section className={styles.section}>
            <header className={styles.header}>
            <img src={data.img[0]}/>
            <h3>{data.name}</h3>
            </header>
            {data.img.map((image , index)=>{
                return(
                    <a href={image} className={styles.article} target='_blank'><img src={image}/></a>
                )
            })}
            {
                data?.vid && 
                data?.vid.map((vid , index)=>{
                    return(
                        <a href={vid} className={`${styles.article} ${styles.video}`} target='_blank'>
                            <video  controls autoPlay muted loop>
                            <source src={vid} type="video/mp4"/>
                            </video> 
                        </a>
                    )
                })
            }
        </section>
        <Footer/>
        </>
     );
}

export default WorkArticle;
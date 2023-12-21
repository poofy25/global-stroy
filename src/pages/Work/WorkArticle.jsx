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
        <section className={styles.article}>
            <header className={styles.header}>
            <img src={data.img[0]}/>
            <h3>{data.name}</h3>
            </header>
            {data.img.map((image , index)=>{
                return(
                    <a href={image} target='_blank'><LazyLoadImage src={image} effect='blur'/></a>
                )
            })}
        </section>
        <Footer/>
        </>
     );
}

export default WorkArticle;
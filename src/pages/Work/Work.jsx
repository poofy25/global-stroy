import styles from './work.module.css'
import { useEffect } from 'react';

import workContent from './workContent';
import banner from '/src/assets/img/banner.png'


function WorkPage({setNavStatus}) {
    useEffect(()=>{
        setNavStatus(false)
      },[])
    return ( 
        <section className={styles.section}>
             <header className={styles.header}>
                <img src={banner}/>
                <h1>Avem cele mai mici preturi la materiale de constructie!</h1>
                </header>
            {
                Object.keys(workContent).map((key, index) => {
                    const article = workContent[key]
                    return(
                        <a href={`/lucrari/${key}`} className={styles.article} key={index}>
                        <img src={article.img[0]}/>
                        <p>{article.name}</p>
                        </a>
                    )

                })
            }
        </section>
     );
}

export default WorkPage;
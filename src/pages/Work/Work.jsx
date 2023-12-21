import styles from './work.module.css'
import { useEffect } from 'react';

import workContent from './workContent';



function WorkPage({setNavStatus}) {
    useEffect(()=>{
        setNavStatus(false)
      },[])
    return ( 
        <section className={styles.section}>
            
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
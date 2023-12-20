import styles from './navBarMenu.module.css'

import { useEffect } from 'react';

import roFlag from '/src/assets/svg/romania.svg'
import ruFlag from '/src/assets/svg/ru.svg'

function NavBarMenu({status , setStatus , language , setLanguage , langJson}) {


    useEffect(()=>{
        const menu = document.querySelector(`.${styles.menu}`)
        if(menu){
            console.log(status , menu)
            if(status){
                menu.classList.add(`${styles.active}`)
            }else{
                menu.classList.remove(`${styles.active}`)
            }
        }
    },[status])

    const menuClick = (e)=>{
        if(e.target !== document.querySelector(`.${styles.menuContent}`
        )){
            setStatus(false)
        }
    }

    return ( 

        <section onClick={menuClick} className={styles.menu}>

            <section className={styles.menuContent}>
            <a onClick={()=>{setStatus(!status)}} href='#acasa'>Acasa</a>
            <a onClick={()=>{setStatus(!status)}} href='#desprenoi'>Lucrari</a>
            <a onClick={()=>{setStatus(!status)}} href='#servicii'>Servicii</a>
            <a onClick={()=>{setStatus(!status)}} className={styles.lasta} href='#contact'>Contacte</a>
            <section className={styles.languages}>
                <button onClick={()=>{setLanguage('RO')}} className={language==='RO' && styles.active}><img alt="Romanian Flag" src={roFlag}/>RO</button>
                <button onClick={()=>{setLanguage('RU')}} className={language==='RU' && styles.active}><img alt="Russian Flag" src={ruFlag}/>RU</button>
            </section>
            </section>

        </section>


    );
}

export default NavBarMenu;
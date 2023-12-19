import styles from './navBarMenu.module.css'

import { useEffect } from 'react';



function NavBarMenu({status , setStatus}) {


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

            </section>

        </section>


    );
}

export default NavBarMenu;
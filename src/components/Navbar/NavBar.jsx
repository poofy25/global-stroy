import styles from './navBar.module.css'

import NavBarMenu from './NavBarMenu'

import { useEffect, useState } from 'react'

import logo from '/src/assets/logo_3.png'
import callIcon from '/src/assets/svg/call.svg'


function NavBar({navStatus}) {


    const [menuActive , setMenuActive] = useState(false)
  
    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }


    useEffect(()=>{

        
        if(menuActive && navStatus){
            document.querySelector(`.${styles.menuBtn}`).style.filter = 'invert()'
        }else{
            document.querySelector(`.${styles.menuBtn}`).style.filter = ''
        }

    },[menuActive])




    return ( 
        <nav className={navStatus ? `${styles.none} ${styles.true}` : `${styles.none}`} >
            <section className={styles.logoBar}><a><img alt='Logo' src={logo}/></a></section>
            <section className={styles.navigationBar}>
                {window.innerWidth > 994 &&
                <span className={styles.call}><a href='tel:+37360927221'> <span><img src={callIcon}/></span><p>060927221</p></a></span>
                }
                <button aria-label='Menu' onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
        
                
            </section>
            <NavBarMenu status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;
import styles from './navBar.module.css'

import NavBarMenu from './NavBarMenu'

import { useEffect, useState } from 'react'

import logo from '/src/assets/logo_3.png'

function NavBar() {


    const [menuActive , setMenuActive] = useState(false)
  
    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
   


    return ( 
        <nav className={styles.none}>
            <section className={styles.logoBar}><img alt='Logo' src={logo}/></section>
            <section className={styles.navigationBar}>
               
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
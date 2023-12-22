import styles from './navBarMenu.module.css'

import { useEffect } from 'react';

import roFlag from '/src/assets/svg/romania.svg'
import ruFlag from '/src/assets/svg/ru.svg'
import callIcon from '/src/assets/svg/call.svg'

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';

function NavBarMenu({status , setStatus , language}) {

    const navigateTo = useNavigate()

    const translation = getTranslation(getLangFromUrl()).nav.menu
    const location = useLocation()
    useEffect(()=>{
    },[location])


    useEffect(()=>{
        const menu = document.querySelector(`.${styles.menu}`)
        if(menu){
            if(status){
                menu.classList.add(`${styles.active}`)
            }else{
                menu.classList.remove(`${styles.active}`)
            }
        }
    },[status])

    const menuClick = (e)=>{
        if(e.target == e.currentTarget
        ){
            setStatus(false)
        }
    }

    const setLanguage = (lang)=>{
        const firstSegment = document.location.pathname.split('/')[1];
        if(firstSegment === 'ro'){}
        const newPath = "/" + lang + document.location.pathname.replace("/ro",'').replace('/ru','')
        console.log(newPath)
        navigateTo(newPath)
    }

    return ( 

        <section onClick={menuClick} className={styles.menu}>

            <section className={styles.menuContent}>
            <span className={styles.call}><a href='tel:+37360927221'><p>060927221</p> <span><img src={callIcon}/></span></a></span>
            <a onClick={()=>{setStatus(!status)}} href={`/${getLangFromUrl()}/acasa`}>{translation.home}</a>
            <a onClick={()=>{setStatus(!status)}} href={`/${getLangFromUrl()}/lucrari`}>{translation.work}</a>
            <a onClick={()=>{setStatus(!status)}} href={`/${getLangFromUrl()}/servicii`}>{translation.services}</a>
            <a onClick={()=>{setStatus(!status)}} href={`/${getLangFromUrl()}/despre`}>{translation.about}</a>
            <a onClick={()=>{setStatus(!status)}} className={styles.lasta} href={`/${getLangFromUrl()}/contact`}>{translation.contact}</a>

            <section className={styles.languages}>
                <button onClick={()=>{setLanguage('ro')}} className={getLangFromUrl()==='ro' && styles.active}><img alt="Romanian Flag" src={roFlag}/>RO</button>
                <button onClick={()=>{setLanguage('ru')}} className={getLangFromUrl()==='ru' && styles.active}><img alt="Russian Flag" src={ruFlag}/>RU</button>
            </section>
            </section>

        </section>


    );
}

export default NavBarMenu;
import styles from './footer.module.css'
import logo from '/src/assets/logo_3.png'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../languages/languages.js';
import { getLangFromUrl } from '../../functions/getLangFromUrl';

function Footer() {

    const translation = getTranslation(getLangFromUrl()).footer
    const location = useLocation()
    useEffect(()=>{
    },[location])

    return ( 
        <footer>
            <img src={logo}/>
            <a href='/contacte'>{translation.contactBtn}</a>
            <p>Creat de Buza Cristian</p>
        </footer>
     );
}

export default Footer;
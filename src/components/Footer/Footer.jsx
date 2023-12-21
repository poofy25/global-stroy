import styles from './footer.module.css'
import logo from '/src/assets/logo_3.png'

function Footer() {
    return ( 
        <footer>
            <img src={logo}/>
            <a href='/contacte'>Contacte</a>
            <p>Creat de Buza Cristian</p>
        </footer>
     );
}

export default Footer;
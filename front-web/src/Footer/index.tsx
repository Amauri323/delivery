import './styles.css';
import { ReactComponent as Insta } from './instagram.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Youtube} from './youtube.svg';

function Footer(){
    return (
       <footer className='main-footer'>
        App desenvolvido por Amauri Araujo <br />
        <div className='footer-icons'>
            <a href="insta" target="_new"><Insta /></a>
            <a href="https://www.linkedin.com/in/amauri-araujo-b4b64290/" target="_new"><Linkedin /></a>
            <a href="youtube" target="_new" ><Youtube /> </a>
            
        </div>
       </footer>
    )
}

export default Footer;
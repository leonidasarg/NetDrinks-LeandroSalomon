import logoNet from './Logonet.png';
import './navbar.css'
import { CartWidget} from '../../components/CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="topbar">
            <a href="#">
                <img src={logoNet} className="logoImg"  />
            </a>
        <nav className="navbar">
          <ul className="links">
            <li className="link">
              <a href='#'>HOME</a>
            </li>
            <li className="link">
              <a href='#'>Productos</a>
            </li>
            <li className="link">
              <a href='#'>Nosotros</a>
            </li>
            <li className="link">
              <a href='#'>Contacto</a>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>

    )
}
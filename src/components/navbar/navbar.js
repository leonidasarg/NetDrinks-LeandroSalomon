import React from 'react'
import { useContext } from 'react'
import logoNet from './Logonet.png';
import './navbar.css'
import { CartWidget } from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext} from '../Context';

export const Navbar = () => {
  
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);

    return (
        <header className="topbar">
              <Link exact to={"/"}>
                <img src={logoNet} className="logoImg"  />
              </Link>
        <nav className="navbar">
          <ul className="links">
            <li className="link" >
              <Link exact to={"/"}>
                Home
              </Link>
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
            <Link to={'/cart'}>
              Carrito <span>{productsCount()}</span>
              <CartWidget /> 
            </Link>
          </ul>
        </nav>
      </header>

    )
}
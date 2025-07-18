import {useState, useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styleEstatico.css'
import './bootstrap-styles.css'
import Cart from '../Cart'
import { CartContext } from '../../context/CartContext'

const Header = () => {
  const {
    cart,
    handleDeleteFromCart
  } = useContext(CartContext);

  const [isCartOpen, setCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo/Brand */}
          <Link className="navbar-brand text-white fw-bold" to="/">
            Mi Tienda
          </Link>

          {/* Botón hamburguesa */}
          <button 
            className="navbar-toggler custom-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de navegación */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink 
                  to='/' 
                  className={({isActive}) => `nav-link custom-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/acercade' 
                  className={({isActive}) => `nav-link custom-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/productos' 
                  className={({isActive}) => `nav-link custom-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/contacto' 
                  className={({isActive}) => `nav-link custom-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <button className='btnCart btn' onClick={()=> setCartOpen(true)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/login' 
                  className='btnLogin nav-link'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/admin' 
                  className='btnAdmin nav-link'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-user-tie"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <Cart isOpen={isCartOpen} onClose={()=> setCartOpen(false)} cart={cart} handleDeleteFromCart={handleDeleteFromCart}/>
      </nav>
    </header>
  )
}

export default Header

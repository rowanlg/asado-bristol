import React from "react"
import { Link } from "gatsby"
import "../../styles/mystyles.scss"
import "../../styles/header.scss"
import asadoLogo from "../../images/asado-logo-barcelona-2.png"


const Header = () => {
  const [isActive, setisActive] = React.useState(false)
  return (
    <div>
      <div className='navbar is-fixed-top nav-main' role='navigation' aria-label='main navigation'>
        <nav className='navbar-brand'>
          <a
            onClick={() => {
              setisActive(!isActive)
            }}
            role='button'
            className={`navbar-burger burger  nav-burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>

          <Link className='nav-image-container' to='/'>
            <img
            src={asadoLogo} 
            alt="asado logo"
            />
          </Link>

        </nav>

      <div id='navbarBasicExample nav-links' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-start start-end-define-left'>
          <div className='navbar-item flex-cont'>

          <Link to='/es/home/#about' className='navbar-item nav-link-start first-item'>
              información
            </Link>

          <Link to='/es/home/#menu' className='navbar-item nav-link-start'>            
              menú
            </Link>

          </div>
        </div>
        <div className='navbar-end start-end-define-right'>

          <div className='navbar-item flex-cont'>

            <div class="navbar-item has-dropdown is-hoverable nav-dropdown-container">
                <a class="navbar-item nav-dropdown-link">
                  Order
                </a>
                <div class="navbar-dropdown">
                  <a href="https://www.ubereats.com/barcelona/food-delivery/asado-burger/XXyA6teISKeaOd0x5tBX5Q?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNhcnJlciUyMGRlJTIwU2FndSVDMyVBOXMlMkMlMjAyNyUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpEelBpS0hhWXBCSVJjN2ZmQkt1dHVZSSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0MS4zOTQzMTQ4NjExMzMwMiUyQyUyMmxvbmdpdHVkZSUyMiUzQTIuMTQ0ODY4ODQ2MTY4NjElN0Q%3D&utm_source=wok" target="_blank" rel="noreferrer" class="navbar-item asado-regular-nav">
                    Domicilio
                  </a>
                </div>
              </div>
  
            <Link to="/es/home/#contact" className='navbar-item nav-link-end last-item'>
              Contacto
            </Link>
          </div>
        </div>
      </div>

    </div>
    <div className="color-strip-gold-header-announcement-bar"><h3></h3></div>
    </div>
  )
}

export default Header;
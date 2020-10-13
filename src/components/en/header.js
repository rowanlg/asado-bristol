import React from "react"
import { Link } from "gatsby"
import "../../styles/mystyles.scss"
import "../../styles/header.scss"
import asadoLogo from "../../images/asado-logo.png"


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

          <Link to='/en/home/#about' className='navbar-item nav-link-start first-item'>
              About
            </Link>

          <Link to='/en/home/#menu' className='navbar-item nav-link-start'>            
                Menu
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
                  <a href="https://pickup.deliverect.com/asado/en/order/" target="_blank" rel="noreferrer" class="navbar-item asado-regular-nav">
                    Click and Collect
                  </a>
                  <a href="https://www.ubereats.com/gb/bristol/food-delivery/asado/V76UJ3Z-RSaq2J4Xrzs6mg" target="_blank" rel="noreferrer" class="navbar-item asado-regular-nav">
                    Delivery
                  </a>
                  <a href="https://pickup.deliverect.com/asado/en/order/" target="_blank" rel="noreferrer" class="navbar-item asado-regular-nav">
                    Merch
                  </a>
                </div>
              </div>
  
            <Link to="/en/home/#contact" className='navbar-item nav-link-end last-item'>
              Contact
            </Link>
          </div>
        </div>
      </div>

    </div>
    <div className="color-strip-gold-header-announcement-bar"><h3>- Half price off with Uber code: UBEREATS50 -</h3></div>
    </div>
  )
}

export default Header;
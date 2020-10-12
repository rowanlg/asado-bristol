import React from "react"
import "../styles/mystyles.scss"
import "../styles/header.scss"
import styled from "styled-components"
import asadoLogo from "../images/asado-logo.png"



const Header = () => {
  const [isActive, setisActive] = React.useState(false)
  return (
    <div className='nav-container'>
      <div className='navbar nav-main' role='navigation' aria-label='main navigation'>
        <nav className='navbar-brand'>
          <a href='/' className='navbar-item'>
          </a>
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

          <a className='nav-image-container' href='/'>
            <img
            src={asadoLogo} 
            />
          </a>

        </nav>

      <div id='navbarBasicExample nav-links' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-start start-end-define-left'>
          <div className='navbar-item flex-cont'>

          <a href='#menu' className='navbar-item nav-link-start'>            
                Menu
            </a>

            <a href='#about' className='navbar-item nav-link-start'>
              About
            </a>
          </div>
        </div>
        <div className='navbar-end start-end-define-right'>

          <div className='navbar-item flex-cont'>

            <div class="navbar-item has-dropdown is-hoverable nav-dropdown-container">
                <a class="navbar-link nav-dropdown-link">
                  Order
                </a>
                <div class="navbar-dropdown">
                  <a href="https://pickup.deliverect.com/asado/en/order/" target="_blank" class="navbar-item asado-regular-nav">
                    Click and Collect
                  </a>
                  <a href="https://www.ubereats.com/gb/bristol/food-delivery/asado/V76UJ3Z-RSaq2J4Xrzs6mg" target="_blank" class="navbar-item asado-regular-nav">
                    Delivery
                  </a>
                  <a href="https://pickup.deliverect.com/asado/en/order/" target="_blank" class="navbar-item asado-regular-nav">
                    Merch
                  </a>
                </div>
              </div>
  
            <a href="#contact" className='navbar-item nav-link-end'>
              Contact
            </a>
          </div>
        </div>
      </div>

    </div>
  

   
  </div>
    

  )
}

export default Header;
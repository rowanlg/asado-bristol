import React from "react"
import "../pages/mystyles.scss"
import styled from "styled-components"
import asadoLogo from "../images/asado-logo.png"

const NavContainer = styled.div `
  height: 20%;
`

const NavMain = styled.nav `
  height: 70%;
  
`

const NavImageContainer = styled.a `
  position: fixed;
  left: 50%;
  top: 1.5rem;
  margin-left: -3rem;
  width: 6rem;
`

const NavImage = styled.img `
  width: auto;
`

const Burger = styled.a `

  :hover {
    background-color: transparent;
    color: white !important;
  }
  span {
    width: 20px;
    height: 2px;
  }
`

const NavLinks = styled.div `
  padding-top: 2rem;
  
  @media only screen and (max-width: 1023px) {
    background-color: #fcb632;
    a {color: #02223b;}
    a:hover {color: #024443 !important;}
  }
`

const FlexCont = styled.div `
height: 100%;

@media only screen and (max-width: 1023px) {
  width: auto;
}
@media only screen and (min-width: 1024px) {
  width: 100%;
  display: flex;
  justify-content: space-around;
}  
`

const StartEndDefineLeft = styled.div `
  margin-bottom: 1.3rem;
  width: 30%;
  height: 100%;
  
  @media only screen and (min-width: 1024px) {
    margin-left: 12%;
  }
`

const NavLinkStart = styled.a `
  font-family: asado-regular;
  font-size: 1.5rem;
  color: #ffffff;

  :hover {
    color: #ffffff !important;
    background-color: transparent !important;
    text-decoration: underline;
  }

  :focus {
    color: #ffffff !important;
    background-color: transparent !important;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`

const StartEndDefineRight = styled.div `
  margin-bottom: 1.3rem;
  width: 30%;
  height: 100%;

  @media only screen and (max-width: 1023px) {
    margin-top: -2.2rem;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 12%;
  }
`

const NavLinkEnd = styled.a `
  font-family: asado-regular;
  font-size: 1.5rem;
  color: #ffffff;

  :hover {
    color: #ffffff !important;
    background-color: transparent !important;
    text-decoration: underline;
  }
  :focus {
    color: #ffffff !important;
    background-color: transparent !important;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`

const NavDropdownLink = styled.a `
  font-family: asado-regular !important;
  font-size: 1.5rem !important;
  color: #ffffff !important;
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;

  :hover {
    color: #ffffff !important;
    background-color: transparent !important;
    text-decoration: underline !important;
  }
  
  @media only screen and (min-width: 1024px) {
    font-size: 2rem !important;
    padding: 8px !important;
  }
  @media only screen and (max-width: 1023px) {
    padding-left: 0.8rem;
  }
  
`

const Header = () => {
  const [isActive, setisActive] = React.useState(false)
  return (
    <NavContainer>
      <NavMain className='navbar' role='navigation' aria-label='main navigation'>
        <nav className='navbar-brand'>
          <a href='/' className='navbar-item'>
          </a>
          <Burger
            onClick={() => {
              setisActive(!isActive)
            }}
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </Burger>

          <NavImageContainer href='/'>
            <NavImage
            src={asadoLogo} 
            />
          </NavImageContainer>

        </nav>

      <NavLinks id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <StartEndDefineLeft className='navbar-start'>
          <FlexCont className='navbar-item'>

          <NavLinkStart href='#menu' className='navbar-item'>            
                Menu
            </NavLinkStart>

            <NavLinkStart href='#about' className='navbar-item'>
              About
            </NavLinkStart>
          </FlexCont>
        </StartEndDefineLeft>
        <StartEndDefineRight className='navbar-end'>

          <FlexCont className='navbar-item'>

            <div class="navbar-item has-dropdown is-hoverable nav-dropdown-container">
                <NavDropdownLink class="navbar-link">
                  Order
                </NavDropdownLink>
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
  
            <NavLinkEnd href="#contact" className='navbar-item'>
              Contact
            </NavLinkEnd>
          </FlexCont>
        </StartEndDefineRight>
      </NavLinks>

    </NavMain>
  

   
  </NavContainer>
    

  )
}

export default Header;
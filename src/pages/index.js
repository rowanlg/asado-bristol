import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import { Link } from "gatsby"
import AnimatedLoad from "../components/animatedload"
import asadoLogoText from "../images/asado-logo-barcelona-2.png"

const IndexPage = () => {
  return (
    <div className="intro-wrapper">
      <div className="asado-animation-container"> 
        <AnimatedLoad />
      </div>

      <div className="options-container">
        <div className="logo-box">
          <img 
            src={asadoLogoText}
            alt="Asado Logo"
            className="asado-logo-text"
          />
        </div>
        <div className="title-box">
          <h1>Please choose a language...</h1>
          <h1>por favor elija un idioma...</h1>
          <h1>Trieu un idioma...</h1>
        </div>
        
        <div className="option-box-container">
          <Link to="/en/home" target="_blank">
            <div className="option-box lang-box">
              <h2>English</h2>
            </div>
          </Link>
          <Link to="/">
          <div className="option-box lang-box">
            <h2>Español</h2>
          </div>
          </Link>
          <Link to="/">
          <div className="option-box lang-box">
            <h2>Català</h2>
          </div>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default IndexPage;
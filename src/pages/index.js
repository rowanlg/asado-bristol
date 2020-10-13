import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import { Link } from "gatsby"
import AnimatedLoad from "../components/animatedload"
import asadoLogoText from "../images/asado-logo-text.png"

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
          <h1>Please choose a restaurant...</h1>
          <h1>Elija un restaurante...</h1>
          <h1>Escolliu un restaurant...</h1>
        </div>
        
        <div className="option-box-container">
          <Link to="http://www.asadobristol.com/" target="_blank">
            <div className="option-box bristol-box">
              <h2>Bristol</h2>
            </div>
          </Link>
          <Link to="/en/home">
          <div className="option-box barca-box">
            <h2>Barcelona</h2>
          </div>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default IndexPage;
import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import AnimatedLoad from "../components/animatedload"

const IndexPage = () => {
  return (
    <div className="intro-wrapper">
      <div className="asado-animation-container"> 
        <AnimatedLoad />
      </div>

      <div className="options-container">
        <div className="title-box">
          <h1>Please choose a restaurant...</h1>
          <h1>Elija un restaurante...</h1>
          <h1>Escolliu un restaurant...</h1>
        </div>
        <Link to="http://www.asadobristol.com/" target="_blank">
          <div className="option-box green-box">
            <h2>Bristol</h2>
          </div>
        </Link>
        <Link to="/en/home">
        <div className="option-box gold-box">
          <h2>Barcelona</h2>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage;
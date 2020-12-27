import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import AnimatedLoad from "../components/animatedload"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <div className="index-wrapper">
      
      
      <div className="asado-animation-container"> 
        <AnimatedLoad />
      </div>
      

      <Layout>
      <SEO title="Home" />
      
      <div className="color-strip-gold-layout" id="about">
        <h2>ASADO meaning barbecue in Spanish </h2>
      </div>
      <div className="about-wrapper">
        <div className="text-box">
          <p>
            <br />
            Cooking over a wood fired asado grill and using the highest quality, locally sourced ingredients.
            <br />
            <br />
            At ASADO we are creating one of the tastiest burgers you have ever eaten using South American, Southern American and British flavours. We are open from 12pm to eat-in or takeaway.  
          </p>
        </div>
      </div>
      

      <Contact />

    </Layout>

    </div>
  )
}

export default IndexPage;
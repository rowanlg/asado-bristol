import React from "react"
import "../../styles/mystyles.scss"
import "../../styles/home.scss"
import Layout from "../../components/en/layout"
import SEO from "../../components/seo"
import Menu from "../../components/en/menu"
import Contact from "../../components/en/contact"


const HomePage = () => (
  <div className="master-wrapper" id="top-of-page">
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
      
      <Menu />

      <Contact />

    </Layout>
  </div>
)

export default HomePage

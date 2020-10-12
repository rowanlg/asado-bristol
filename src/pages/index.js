import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"


const IndexPage = () => (
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

      <div className="contact-section" id="contact">
        <div className="contact-info-container">

          <div className="contact-info-box">
            <h3>Asado Barcelona</h3>
            <p>Passatge de Lluís Pellicer, 12, 08036 Barcelona, Spain</p>
          </div>

          <div className="contact-info-box">
            <h3>Telephone</h3>
            <p>Passatge de Lluís Pellicer, 12, 08036 Barcelona, Spain</p>
          </div>

          <div className="contact-info-box">
            <h3>Contact Info</h3>
            <p>01999 288 477
              <br/>
              info@asadobarcelona.es
            </p>
            
          </div>

        </div>
      </div>
      
      <div className="color-strip-green-layout"></div>
    </Layout>
  </div>
)

export default IndexPage

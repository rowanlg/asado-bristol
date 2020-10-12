import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"



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
      <div>




      <div className="menu-section-wrapper"  id="menu">
        <div className="menu-title">
          <h1>Menu Board</h1>
        </div>

        <div className="menu-items-wrapper">
          <div className="menu-items-container">
            

            <div className="menu-item-box">
              <div className="menu-text-box">
                <h2>Asado  Burger</h2>
                <h3>dbl 14 | SGL 10 | add bacon + 1</h3>
                <p>Oak grilled dry aged beef patty, West Country cheddar cheese, chimichurri, confit garlic mayo, natural ketchup, pickled red onions & lettuce.</p>
              </div>
            </div>

            <div className="menu-item-box">
              <div className="menu-text-box">
              <h2>El Don</h2>
              <h3>​dbl 17 | sgl 13 | add bacon + 1</h3>
              <p>Oak grilled dry-aged beef patty, West Country cheddar cheese, smoky dry-aged shredded beef, bacon and onion stew, confit garlic mayo, ketchup and lettuce.</p>
              </div>
            </div>

            <div className="menu-item-box">
              <div className="menu-text-box">
              <h2>Pollo Libre</h2>
              <h3>12 | add bacon + 1</h3>
              <p>Free-range fried buttermilk chicken thigh with chunky guacamole, chipotle mayo & lettuce.</p>
              </div>
            </div>

            <div className="menu-item-box">
              <div className="menu-text-box">
              <h2>Veggie or Vegan Asado burger</h2>
              <h3>​DBL 17  | SGL 12 (VG) (V)</h3>
              <p>Beyond meat beef patty, West Country cheddar cheese, chimichurri, confit garlic mayo, natural ketchup, pickled red onions and  lettuce.
              <br />
              <br />
              *Available as Vegan or Veggie. </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      

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

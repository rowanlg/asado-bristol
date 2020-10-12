import React from "react"
import "../styles/mystyles.scss"
import "../styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div className="about-wrapper">
      <div className="text-box">
        <h2>ASADO meaning barbecue in Spanish </h2>
        <br />
          <p>Cooking over a wood fired asado grill and using the highest quality, locally sourced ingredients.
          <br />
          At ASADO we are creating one of the tastiest burgers you have ever eaten using South American, Southern American and British flavours. We are open from 12pm to eat-in or takeaway.  
          <br />
          <br />
          The beef in our burgers is, dry aged to perfection and made of our top secret mix. 
          <br />
          <br />
          At ASADO we take into account the impact of eating meat has on the environment and the quality of life the animals have. Therefore we only work with farms and suppliers who have the same ethics as us to create meat dishes the way we believe they should be done. 
          <br />
          <br />
          At ASADO we also take cheese very seriously, especially living so close to one the best cheese producing regions in the world! We use high quality, West Country produced cheese and not the plastic American style cheese that is so often used in burgers. 
          <br />
          <br />
          Our menu does not only consist of amazing burgers but other grilled plates and seasonal specials. We also provide many tasty options for vegetarians, including burgers, side dishes and seasonal specials. At ASADO our side dishes are just as important as the main dishes and they will really blow you away with some of the most banging chips, wings, salads, slaws and desserts you will ever try. 
          <br />
          <br />
          Our drinks menu will also be locally sourced where ever possible and we have an amazing classic and seasonal cocktail menu.  
          <br />
          <br />
          The beats are played from a custom-made, just for us, stereo-system made by the amazing Bristol speaker company Mini Rig. We will be playing a mixture of old school hiphop, funk, Bristol bass music and latin beats. 
          <br />
          <br />
          Our menu is available for eat in or take out. . .</p>
          <br />
          <br />
      </div>
    </div>

    <div className="color-strip"></div>
  </Layout>
)

export default IndexPage

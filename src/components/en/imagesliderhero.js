import React from "react"
import "../../styles/imagesliderhero.scss"
import bg from "../../images/bg.jpg"
import bg2 from "../../images/bg2.jpg"
import BackgroundSlider from "react-background-slider"


const ImageSliderHero = () => {
  
  return (
    <div className='wrapper'>
      <BackgroundSlider 
      images={[bg, bg2]}
      duration={10} transition={1}/>
      {/*<div className="title-container">
        <h1>Local Ingredients,
          <br />
          World Flavours.
        </h1>
      </div>*/}
    </div>
    
  )
  
  
}

export default ImageSliderHero;
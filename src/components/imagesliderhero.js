import React from "react"
import styled from "styled-components"
import bg from "../images/bg.jpg"
import bg2 from "../images/bg2.jpg"
import BackgroundSlider from "react-background-slider"


const Wrapper = styled.div `
  position: relative;
  margin-top: -3.5rem;
  width: 100%;
  height: 100%;
  z-index: -1;
`


const ImageSliderHero = () => {
  
  return (
    <Wrapper>
      <BackgroundSlider 
      images={[bg, bg2]}
      duration={10} transition={1}/>
    </Wrapper>
    
  )
  
  
}

export default ImageSliderHero;
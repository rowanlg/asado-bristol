import React from "react"
import "../pages/mystyles.scss"
import styled from "styled-components"
import Header from "./header"
import ImageSliderHero from "./imagesliderhero"

const ScreenWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  height: 100vh;
  width: 100vw;
  background-color: #024443;
`

const Content = styled.div `
  padding-top: 3rem;
  z-index: 1;
`

const BackgroundSlider = styled(ImageSliderHero) `
  z-index: -1;
`

const Layout = ({children}) => {
  return (
    <ScreenWrapper>
      <Header/>
      <ImageSliderHero />
      <Content>{children}</Content>
    </ScreenWrapper>
  )
}

export default Layout;
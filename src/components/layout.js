import React from "react"
import "../styles/mystyles.scss"
import "../styles/layout.scss"
import Header from "./header"
import ImageSliderHero from "./imagesliderhero"


const Layout = ({children}) => {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className="screen-wrapper">
      <Header />
      <ImageSliderHero />
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default Layout;
import React from "react"
import "../../styles/mystyles.scss"
import "../../styles/menu.scss"

import One from "../../images/1.jpeg"
import Two from "../../images/2.jpeg"
import Three from "../../images/3.jpeg"
    
    
const MenuPDF = () => {
  return (
    <div className="menu-section-pdf"  id="menu">

      <img src={One} className="pdf-menu" />
      <img src={Two} className="pdf-menu" />
      <img src={Three} className="pdf-menu" />

    </div>
 
  )
}

export default MenuPDF;
    
   
    

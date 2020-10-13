import React from "react"
import "../styles/mystyles.scss"
import "../styles/animatedload.scss"
import asadoAnimation from "../images/asado-animation-one-loop.gif"

const AnimatedLoad = () => {
  return (
    <div>
      <img 
        src={asadoAnimation}
        alt="Asado animation"
        className="asado-gif"
      />
    </div>
  )
}

export default AnimatedLoad;
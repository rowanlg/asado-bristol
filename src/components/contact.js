import React from "react"
import "../styles/mystyles.scss"
import "../styles/contact.scss"
import asadoMapPin from "../images/asado-barca-map-pin.png"


const Contact = () => (
      <div className="contact-wrapper" id="contact">

        <h1>Contact</h1>
      
          <div className="contact-info-container">

            <div className="contact-info-box left">
              <h3>Asado Barcelona</h3>
              <p>Passatge de Lluís Pellicer, 12, 08036 Barcelona, Spain</p>
            </div>

            <div className="contact-info-box map-pin middle">
              <img 
                src={asadoMapPin}
                alt="asado on the map"
                className="map-pin-image"
              />
            </div>

            <div className="contact-info-box right">
              <h3>Opening Hours</h3>
              <p>Mon-Fri
                <br/>
                11am-11pm
              </p>
              <p>Sat-Sun
                <br/>
                12am-11pm
              </p>
              
            </div>

          </div>
        </div>
)

export default Contact

import React from "react"
import "../../styles/mystyles.scss"
import "../../styles/contact.scss"
import asadoMapPin from "../../images/asado-barca-map-pin.png"


const Contact = () => (
      <div className="contact-wrapper" id="contact">

        <h1>Información del contacto</h1>
      
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
              
              <h3>horario de apertura</h3>

              <p>martes
                <br/>
                7pm-11pm
              </p>
              <p>
                miércoles-domingo
                <br/>
                1pm-4pm | 7pm-11pm
              </p>
              


            </div>

          </div>
              <h3>Para reservaciones por favor escribir a este email: <br/>asadobcn@gmail.com</h3>
        </div>
)

export default Contact

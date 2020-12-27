import React from "react"
import { Link } from "gatsby"
import "../../styles/mystyles.scss"
import "../../styles/footer.scss"
import { FaInstagram, FaChevronUp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <Link to="https://www.instagram.com/asadobcn/" target="_blank">
          <div className="footer-item-container hover">
            <FaInstagram className="insta-icon" />
            <h3>@asadobcn</h3>
            <h3>Barcelona</h3>
          </div>
        </Link>

        <div className="footer-item-divider"></div>

        <div className="footer-item-container">
          <a href="tel:+34934196590"><h2>+34 934 19 65 90</h2></a>
        </div>

        <div className="footer-item-divider"></div>

        <Link to="https://www.instagram.com/asadoburgers/" target="_blank">
          <div className="footer-item-container hover">
            <FaInstagram className="insta-icon" />
            
            <h3>@asadoburgers</h3>
            <h3>Bristol</h3>
          </div>
        </Link>
        
        <a href="#top-of-page">
          <FaChevronUp className="up-to-top" />
        </a>

      </div>
    </div>
  )
}

export default Footer;
import React from "react"
import { Link } from "gatsby"
import "../../styles/mystyles.scss"
import "../../styles/footer.scss"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <Link to="https://www.instagram.com/asadobcn/" target="_blank">
          <div className="footer-item-container hover">
            <FaInstagram className="insta-icon" />
            <h3>@asadobcn</h3>
          </div>
        </Link>

        <div className="footer-item-divider"></div>

        <div className="footer-item-container">
        <a href="tel:123-456-7890"><h2>0119 999 888</h2></a>
        </div>

        <div className="footer-item-divider"></div>

        <Link to="https://www.instagram.com/asadoburgers/" target="_blank">
          <div className="footer-item-container hover">
            <FaInstagram className="insta-icon" />
            <h3>@asadoburgers</h3>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Footer;
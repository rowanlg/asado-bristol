import React from "react"
import "../../styles/mystyles.scss"
import "../../styles/menu.scss"
    
    
const Menu = () => {
  return (
    <div className="menu-section-wrapper"  id="menu">

      <div className="menu-title">
        <h1>Menu Board</h1>
      </div>

      <div className="menu-items-wrapper">
        <div className="menu-items-container">
          

          <div className="menu-item-box">
            <div className="menu-text-box">
              <h2>Asado  Burger</h2>
              <h3>dbl 14 | SGL 10 | add bacon + 1</h3>
              <p>Oak grilled dry aged beef patty, West Country cheddar cheese, chimichurri, confit garlic mayo, natural ketchup, pickled red onions & lettuce.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>El Don</h2>
            <h3>​dbl 17 | sgl 13 | add bacon + 1</h3>
            <p>Oak grilled dry-aged beef patty, West Country cheddar cheese, smoky dry-aged shredded beef, bacon and onion stew, confit garlic mayo, ketchup and lettuce.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>Pollo Libre</h2>
            <h3>12 | add bacon + 1</h3>
            <p>Free-range fried buttermilk chicken thigh with chunky guacamole, chipotle mayo & lettuce.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>Veggie or Vegan Asado burger</h2>
            <h3>​DBL 17  | SGL 12 (VG) (V)</h3>
            <p>Beyond meat beef patty, West Country cheddar cheese, chimichurri, confit garlic mayo, natural ketchup, pickled red onions and  lettuce.
            <br />
            <br />
            *Available as Vegan or Veggie. </p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
 
  )
}

export default Menu;
    
   
    

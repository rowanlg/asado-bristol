import React from "react"
import "../../styles/mystyles.scss"
import "../../styles/menu.scss"
    
    
const Menu = () => {
  return (
    <div className="menu-section-wrapper"  id="menu">

      <div className="menu-title">
        <h1>Burgers</h1>
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
          
          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>Kids Beef Burger</h2>
            <h3>9 | add bacon + 1</h3>
            <p>Kids beef burger with cheese, ketchup & lettuce with a small portion of chips.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>Kids Chicken burger</h2>
            <h3>9 | add bacon + 1</h3>
            <p>Kids chicken burger, confit garlic mayo & lettuce with a small portion of chips.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="menu-title">
        <h1>Sides</h1>
      </div>

      <div className="menu-items-wrapper">
        <div className="menu-items-container">
          

          <div className="menu-item-box">
            <div className="menu-text-box">
              <h2>Espresso BBQ wings</h2>
              <h3>4 wings x 7.50| 8x 13 | 12x 17 </h3>
              <p>3 joint, free range, crispy wings in Extract espresso BBQ sauce.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>handcut Rosemary salt chipS</h2>
            <h3>​3.50 (Vg)</h3>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>IPA cheesy chipS</h2>
            <h3>5.50 (V)</h3>
            <p>Rosemary salt chip topped with  IPA cheddar cheese sauce.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>El Don cheesy chipS</h2>
            <h3>​8.50 (V)</h3>
            <p>Chips with El Don shredded beef & IPA cheese sauce.</p>
            </div>
          </div>
          
          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>morcilla balls</h2>
            <h3>6.50</h3>
            <p>(black pudding) with chimichurri mayo.</p>
            </div>
          </div>

          <div className="menu-item-box">
            <div className="menu-text-box">
            <h2>Pickled slaw</h2>
            <h3>3.50 (V)</h3>
            <p>Slaw with pickled stuff and house made dressing.</p>
            </div>
          </div>

        </div>
      </div>


      <div className="menu-title">
        <h1>Extras</h1>
      </div>

      <div className="menu-items-wrapper">
        <div className="menu-items-container">
          

          <div className="menu-item-box">
            <div className="menu-text-box">
              
              <h3>Add smoked streaky bacon 1  | extra patty 4 | Extra cheese 1</h3>
              <h3></h3>
              <h3>Dips <br />
              Confit garlic mayo, Chipotle mayo,  Espresso BBQ sauce, Chimichurri Guacamole 2.50 </h3>

            </div>
          </div>

          

        </div>
      </div>

    </div>
 
  )
}

export default Menu;
    
   
    

import { NavLink } from "react-router-dom"
import { navbarLinks } from "../../constants"
import { INavLink } from "types"

const Navbar = () => {
  return (
        
    <div className='navbar'>
        <div className="logo-wrap">
          <img className="logo" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/logo2.png" alt=":("/>
          
          <NavLink to="/" className="logo-text">Arcane Tavern</NavLink>
        </div>

            <ul className="buttons-wrap">
              {navbarLinks.map((link: INavLink) => {
                return (
                  <li key={link.label}
                    className="btn">
                      
                      <NavLink 
                        to={link.route} 
                        className="navlink">

                          {link.label}
                      </NavLink>
                    </li>
                )
              })}

            </ul>
    </div>

  )
}

export default Navbar

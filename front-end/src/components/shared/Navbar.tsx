import { NavLink } from "react-router-dom"
import { navbarLinks } from "../../constants"
import { INavLink } from "../../types"

const Navbar = () => {
  return (
        
    <div className='navbar'>
        <div className="logo-wrap">
          <img className="logo" src="../../../../public/logo2.svg" alt=":("/>
          {/* <label className="logo"></label> */}
          <p className="logo-text">Arcane Tavern</p>
        </div>
        {/* <div className="buttons-wrap"> */}

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
            {/* <Link to="/"> 
              <label className='btn' htmlFor="">Home</label>
            </Link>

            <Link to="/spell-list"> 
              <label className='btn' htmlFor="">Spells</label> 
            </Link>

            <Link to="/"> 
              <label className='btn' htmlFor="">Characters</label> 
            </Link>

            <Link to="/"> <label
               className='btn' htmlFor="">About Us</label> 
            </Link>

            <Link to="/"> 
              <label className='btn' htmlFor="">Contact</label> 
            </Link>

        </div> */}
    </div>

  )
}

export default Navbar

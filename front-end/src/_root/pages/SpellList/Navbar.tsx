
const Navbar = () => {
  return (
        
    <div className='navbar'>
        <div className="logo-wrap">
          <img className="logo" src="../../../../public/logo2.png" alt=":("/>
          {/* <label className="logo"></label> */}
          <label className="logo-text" htmlFor="">Arcane Tavern</label>
        </div>
        <div className="buttons-wrap">
            <label className='btn' htmlFor="">Home</label>
            <label className='btn' htmlFor="">Spells</label>
            <label className='btn' htmlFor="">Characters</label>
            <label className='btn' htmlFor="">About Us</label>
            <label className='btn' htmlFor="">Contact</label>
        </div>
    </div>

  )
}

export default Navbar

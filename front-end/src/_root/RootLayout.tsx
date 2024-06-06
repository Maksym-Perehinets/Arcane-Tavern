import Navbar from './pages/SpellList/Navbar'

import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>

        <section> 
            <div className='container'>
                <Navbar />
                <Outlet />
            </div>
        </section>
       
    </div>
    )
}

export default RootLayout
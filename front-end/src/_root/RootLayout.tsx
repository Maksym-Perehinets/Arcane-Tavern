import Navbar from './pages/SpellList/Navbar'
import Sidebar from './pages/SpellList/Sidebar'

import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
        <Sidebar />

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
import Navbar from './pages/Home/Navbar'
import Sidebar from './pages/Home/Sidebar'

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
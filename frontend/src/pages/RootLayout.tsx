
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'


const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <section> 
            <div className=''>
                <Outlet />
            </div>
        </section>
       
    </div>
    )
}

export default RootLayout
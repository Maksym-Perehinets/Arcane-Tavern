
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>

        <section> 
            <div className='container'>
                <Outlet />
            </div>
        </section>
       
    </div>
    )
}

export default RootLayout
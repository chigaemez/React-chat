import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Chats/Sidebar'

const MainLayout = () => {
  const location = useLocation()
  const hideFooter =
    location.pathname === '/signup' ||
    location.pathname === '/login'

    const hideHeaderPaths = ['/login', '/signup']

  return (
    <div className='flex items-center justify-center h-screen bg-transparent '>
      <div className='w-[80%] flex h-[93%] items-center justify-center p-[40px]'>
      {!hideHeaderPaths.includes(location.pathname) && <Sidebar />}
        <div className=' w-full '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout

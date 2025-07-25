import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Mainroutes from './Routes/Mainroutes.jsx'
import { ToastContainer } from 'react-toastify'
import Wrapper from './Wrapper.jsx'
import Login from './components/Login.jsx'
import Notification from './components/Notification.jsx'


createRoot(document.getElementById('root')).render(<>
<BrowserRouter>
 <Wrapper>
  <div className='bg-gray-950 h-fit overflow-x-hidden'>
      <Nav />
      <Login />
      <Notification/>
      <Mainroutes/>
      <ToastContainer/>
  </div>
 </Wrapper>
</BrowserRouter>
</>
 
)

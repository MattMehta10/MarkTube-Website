import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Mainroutes from './Routes/Mainroutes.jsx'
import { ToastContainer } from 'react-toastify'
import Wrapper from './Wrapper.jsx'



createRoot(document.getElementById('root')).render(<>
<BrowserRouter>
 <Wrapper>
  <div className='bg-gray-950 h-fit overflow-x-hidden'>
      <Nav />
      <Mainroutes/>
      <ToastContainer/>
  </div>
 </Wrapper>
</BrowserRouter>
</>
 
)

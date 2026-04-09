import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Access from './pages/Access'
import Smartwatch from './pages/Smartwatch'
import Watches from './pages/Watches'
import More from './pages/More'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Upload from './admin/Upload'
import Update from './admin/Update'
import Edit from './admin/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
     
     <Routes>
      {/* <Route path='/' element={<login/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/watches' element={<Watches/>}/>
      <Route path='/smartwatch' element={<Smartwatch/>}/>
      <Route path='/access' element={<Access/>}/>
      <Route path='/more' element={<More/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/update' element={<Update/>}/>
       <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
      fetch(`http://localhost:5500/allproducts/${params.id}`)} />
        
      </Routes>
     
     </BrowserRouter>
    
    
       
    </>
  )
}

export default App

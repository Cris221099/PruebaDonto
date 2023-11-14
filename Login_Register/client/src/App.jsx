
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Home from './home'
import Dashboard from './Dashboard'
import ViewPaciente from './GetUser'



function App() {


  return (
    
    <BrowserRouter>
    
    
    <Routes>

    <Route path="/register" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/pacientes" element={<ViewPaciente/>}></Route>

    

    <Route path='/forgot-password' element={<ForgotPassword />}></Route>

    </Routes>
  
    </BrowserRouter>
    
    
    
  )
}

export default App

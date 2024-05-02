import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login'
import About from './component/About'
import SignUp from './component/SignUp'
import Home from './component/Home'
import Contact from './component/Contact'
import './App.css'
import Login1 from './component/Login1';
import AdminPage from './component/AdminPage';
function App() {
 
  return (
    <>
     <Router>
     
     <Routes>
    
     <Route exact path="/" element={<Home />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/signup" element={<SignUp />} />
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
      
       <Route exact path="/login1" element={<Login1/>}/>
<Route exact path='/adminpage' element={<AdminPage/>}/>

      

       {/* <Route path="/signup" element={<Signup />} /> */}
     </Routes>
   </Router>
    </>
  )
}

export default App

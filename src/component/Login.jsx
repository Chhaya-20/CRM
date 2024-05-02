import React, { useState ,useEffect} from 'react';
import '../styles/Login.css'; // Import CSS file for component styling
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  const [name,setname]=useState("");
  const [password,setpassword]=useState("");
  const mode = useSelector(state => state.theme.Mode);
  // const navigate = useNavigate();
 
   useEffect(() => {
     
     if(mode=="light")
     {
       document.documentElement.classList.remove("pp")
     }
     else{
       document.documentElement.classList.add("pp")
     }
   }, [mode]);



  return (
    <>
<Navbar/>


      <div className='uye-bant-alani giris-bant-alani'>
        <div className="container">
        <div className="row">
  <div style={{
    "textAlign":"start"
  }} className="col-lg-7 col-md-5 d-none d-md-block">
    <h2>
      <small>With CRM;</small><br />Get In Touch! Follow! Sell!
    </h2>
    <p>
      Use CRM to manage your Business Processes;
    </p>
  </div>

  <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12">
    <div className="row giris-formu kayit-formu" style={{"marginTop":"-30px"}}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <h3>User Login</h3>
        <form method="post" action="/login_check/en" id="login-form" className="form-horizontal" noValidate="novalidate">

          <input type="hidden" name="_csrf_token" value="eca2c3db629a4fa1602adde7f1191b1be7361148" />

          <div className="form-group has-feedback">
            <label className="control-label col-sm-4 col-md-4"></label>
            <div className="col-md-12">
              <input onChange={(e)=>(setname(e.target.value))} type="text" name="_username" id="_username" value={name}  placeholder="E-MAIL ADDRESS" className="form-control" required="" />
              <span className="glyphicon form-control-feedback" id="_username1"></span>
            </div>
          </div>
          <div className="form-group has-feedback">
            <label className="control-label col-sm-4 col-md-4"></label>
            <div className="col-md-12">
              <input onChange={(e)=>(setpassword(e.target.value))} type="password" name="_password" id="_password" value={password} placeholder="PASSWORD" className="form-control" required="" />
              <span className="glyphicon form-control-feedback" id="_password1"></span>
            </div>
          </div>

          <div className="kayit-checkbox-div">
          
            
            
                <Link to="/resetting/request/en">Did you forget your password?</Link>
             
          </div>
          <input type="submit" className="turuncu-btn" value="Login" />
          <Link to="/signup" className="text-center" style={{textAlign: "center !important", fontSize: "16px", marginTop: "20px"}}>Sign Up Now</Link>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      <div style={{minHeight: "100px"}}></div>
      <Footer/>

    
    </>
  );
}

export default Login;

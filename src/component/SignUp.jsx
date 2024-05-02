import React from 'react';
import '../styles/Login.css'; // Import CSS file for component styling
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Login() {
  return (
    <>
    <Navbar/>

      <div className='uye-bant-alani giris-bant-alani'>
        <div className="container">
          <div className="row">
            <div style={{
    "textAlign":"start"
  }} className=" col-lg-7 col-md-5 d-none d-md-block">
              <h2>
                <small>With CRM;</small><br />Get In Touch! Follow! Sell!
              </h2>
              <p>
                Use CRM to manage your Business Processes;
              </p>
            </div>

            <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12">
              <div className="row giris-formu kayit-formu" style={{ marginTop: "-30px" }}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h3>Sign Up Now!</h3>
                  <form method="post" accept-charset="utf-8" className="form-horizontal" noValidate="novalidate" id="demoCrm">
                    <div className="form-group has-feedback">
                      <div className="col-md-12">
                        <input type="text" name="name" id="name" placeholder="NAME" className="form-control" required="" value="" />
                        <span className="glyphicon form-control-feedback" id="name1"></span>
                      </div>
                    </div>

                    <div className="form-group has-feedback">
                      <div className="col-md-12">
                        <input type="text" name="surname" id="surname" placeholder="SURNAME" className="form-control" value="" />
                        <span className="glyphicon form-control-feedback" id="surname1"></span>
                      </div>
                    </div>

                    <div className="form-group has-feedback">
                      <div className="col-md-12">
                        <input type="text" name="company" id="company" placeholder="COMPANY NAME" className="form-control" value="" />
                        <span className="glyphicon form-control-feedback" id="company1"></span>
                      </div>
                    </div>

                    <div className="form-group has-feedback">
                      <div className="col-md-12">
                        <input type="text" name="phone" id="phone" placeholder="PHONE" className="form-control" value="" />
                        <span className="glyphicon form-control-feedback" id="phone1"></span>
                      </div>
                    </div>

               
                    <div className="form-group has-feedback">
                      <div className="col-md-12">
                        <input type="password" name="password" id="password" placeholder="PASSWORD" className="form-control" value="" />
                        <span className="glyphicon form-control-feedback" id="password1"></span>
                      </div>
                    </div>

                  

                  
                    <input type="submit" className="turuncu-btn demoButton" value="Start Using" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ minHeight: "100px" }}></div>

      <Footer/>
    </>
  );
}

export default Login;

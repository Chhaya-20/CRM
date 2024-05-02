import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
// import {Mode} from '../reducers/Mode'
import { useSelector } from "react-redux";

function Home() {
  const mode = useSelector((state) => state.theme.Mode);
  const navigate = useNavigate();

  useEffect(() => {
    if (mode == "light") {
      document.documentElement.classList.remove("pp");
    } else {
      document.documentElement.classList.add("pp");
    }
  }, [mode]);

  return (
    <>
      <Navbar/>

      <div className='uye-bant-alani giris-bant-alani main'>
        <div className="container">
          <div className="row content">
            <div className="col-lg-7 col-md-6   d-md-block text-dark left-column">
              <div className="column-content">
                <h2 >
                  <small style={{ fontWeight: "600" }}>Your trusted tech partner to transform your business</small><br />Get In Touch! Follow! Sell!
                </h2>
                <p >
                  Hire a cross-functional team of proven developers tailored to your custom requirements
                </p>
                <button onClick={()=>{navigate("/login")}} className='start'>Get Started</button>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 right-column m-auto">
              <div className="column-content">
                <img  src="https://i0.wp.com/lemonlearning.com/wp-content/uploads/2023/01/CRM-1-scaled.jpg?fit=2560%2C1707&ssl=1" alt="" className="animated-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
   
   <div className="secondary  mt-3 text-center">
    <h2 style={{"color":"rgb(0, 92, 162)" , "fontWeight":"bold" , "fontSize":"40px"}}>Our Features </h2>
    <div className="features  justify-content-center align-items-center flex-wrap
">
    <div className="card" >
  <div className="card-body">
    <img className='mb-3' src="https://avisoft.io/_next/image?url=%2Fimages%2Fcost-effective-remote-tech-teams.png&w=64&q=75" alt="" />
    <h5 className="card-title" style={{"fontWeight":"bold"}}>Cost Effective Remote Tech Teams</h5>
   
    <p className="card-text">Based in India, we offer you unique blend of highly technical and cost-effective developers. Large pools of talent available to easily scale your teams</p>
    
  </div>

    </div>


    <div className="card" >

<div className="card-body">
  <img className='mb-3' src="https://avisoft.io/_next/image?url=%2Fimages%2Fone-stop-shop.png&w=64&q=75" alt="" />
  <h5 className="card-title" style={{"fontWeight":"bold"}}>‘One Stop Shop’ for all Your Tech Needs</h5>
 
  <p className="card-text">Full Stack Development, Microservices, Mobile Apps, DevOps, Test Automation - we got you covered on all tech fronts</p>
  
</div>
</div>
<div className="card" >
  <div className="card-body">
    <img className='mb-3' src="https://avisoft.io/_next/image?url=%2Fimages%2Fvetted-professionals.png&w=64&q=75" alt="" />
    <h5 className="card-title" style={{"fontWeight":"bold"}}>Vetted Professionals</h5>
   
    <p className="card-text">Driven and passionate developers who have delivered multiple large-scale projects successfully</p>
   
  </div>
</div>

<div className="card" >
  <div className="card-body">
    <img className='mb-3' src="https://avisoft.io/_next/image?url=%2Fimages%2Fproven-track-records.png&w=64&q=75" alt="" />
    <h5 className="card-title" style={{"fontWeight":"bold"}}>Proven Track Record</h5>
   
    <p className="card-text">Repeat business from same clients is testimony to that With a rich history of successful projects</p>
    
  </div>
  </div>
  <div className="card" >

  <div className="card-body">
    <img className='mb-3' src="https://avisoft.io/_next/image?url=%2Fimages%2Foutsource-with-confidence.png&w=64&q=75" alt="" />
    <h5 className="card-title" style={{"fontWeight":"bold"}}>Outsource with Confidence</h5>
   
    <p className="card-text">With our expertise at your side, outsourcing becomes a journey marked by confidence and peace of mind.</p>
    
  </div>
  </div>


  <div className="card" >
  <div className="card-body">
    <img className='mb-3' src="https://avisoft.io/_next/image?url=%2Fimages%2Fcustomer-obsession.png&w=64&q=75" alt="" />
    <h5 className="card-title" style={{"fontWeight":"bold"}}>Customer Obsession</h5>
   
    <p className="card-text">Our relentless dedication to understanding and fulfilling your needs. We prioritize your satisfaction above all else.</p>
   
  </div>
</div>
        
     
</div>



   
   </div>
  <footer>
    <div className="tags">
    <a href="https://www.facebook.com/avisoftwares"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
</svg></a>
<a href="https://www.linkedin.com/company/avi-soft/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg></a>

<a href="mailto:tech@avisoft.io"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 128 96" id="email"><g><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg></a>
    </div>
   
    Copyright@Avisoft
    
    <div className="links">
      <Link to="/" >Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
      <Link></Link>
    </div>
    
    
    </footer>

      {/* <div className="row">
        <div className="col-lg-4 col-md-5 d-flex justify-content-center align-items-center" style={{"backgroundImage": "url(//www.zohowebstatic.com/sites/zweb/images/commonroot/z-signup-bg.jpg)", "opacity":"0.9"}}>
          <div className="side d-flex flex-column" 
         
          >
            <span>
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="57" viewBox="0 0 458.823 500.824">
  <g id="Group_1496" data-name="Group 1496" transform="translate(-990.042 -37.085)">
    <g id="Group_1" data-name="Group 1" transform="translate(990.042 37.085)">
      <path id="Path_2" data-name="Path 2" d="M314.8-441.806c-104.335,70.813-100.534,155.833,56.066,127.578,162.012-22.946,275.758-109.011,210.191-167.622,119.466,35.084-11.36,179.519-191.177,210.862-256.786,45.257-240.042-86.35-75.08-170.817" transform="translate(-178.542 556.935)" fill="#0457a8" fill-rule="evenodd"/>
      <path id="Path_3" data-name="Path 3" d="M186.278-292.2c189.479,51.451,355.773-7.44,458.823-139.531-16.989,30.45-40.479,60.9-77.86,91.351l46.577,93.23H540.131L515.1-299.082c-60.282,34.471-122.322,50-186.311,44.427l-.694,9.385H250.93l11.819-19.4a305.575,305.575,0,0,1-76.471-27.53" transform="translate(-186.278 600.671)" fill-rule="evenodd"/>
      <path id="Path_4" data-name="Path 4" d="M246.018-285.432l75.082-4.38L369.067-393.68l37.54,83.22,57.007-24.4L371.152-521.948Z" transform="translate(-121.58 521.948)" fill="#0457a8" fill-rule="evenodd"/>
    </g>
    <text id="Avisoft" transform="translate(1424.201 481.909)" fill="#0457a8" font-size="100" font-family="Dubai-Bold, Dubai" font-weight="700" letter-spacing="0.11em"><tspan x="-370.9" y="0">Avisoft</tspan></text>
  </g>
</svg>
</span>
<p style={{"color":"white"}}>"The ease and simplicity of the program and the way that the Avi Team have continued to develop solutions around and integrated with the CRM. We utilize projects for clients and the Avi meeting for training and presentations. From the mobile device the automated calling and tracking is Fabulous."</p>
          
          </div>
        </div>

      
        <div className="col-lg-8 col-md-7" style={{
          "display":"flex",
          "alignItems":"center"
        }} >
         
<div class="signup-form" style={{ display: "block;" }}>
              <div class="z-product" style={{"textAlign":"center"}}>
                <a href="/crm/">
                  {" "}
                  <img
                    typeof="foaf:Image"
                    class="img-responsive"
                    src="//www.zohowebstatic.com/sites/zweb/images/crm/images/icon-crm_blue.png"
                    width="48"
                    height="48"
                    style={{ opacity: "1;" }}
                  />
                  <span>CRM</span>
                </a>
              </div>
              <div class="loggedin-userinfo" style={{ display: "none;" }}></div>
              <h3></h3>
              <div class="region-wrap">
                <div class="za-region-container"></div>
              </div>
              <div class="zwelcome-info ms-5" style={{"textAlign":"center"}}>
                <h2 style={{"fontWeight":"bolder"}}>Log in to access Avi CRM.</h2>{" "}
                <button onClick={()=>{navigate("/login1")}} className="btn mb-3 mt-3"
                style={{
                  "background":"#f0483e",
                 
                  "color":"white",
                  // "width":"100%",
                  "margin":"auto"
                }}
                >
                  SIGN IN
                </button>
               
              </div>
              <div class="copyright-footer" style={{"textAlign":"center"}}>
                <p class="footer-copy">
                Copyright © 2024 Avisoft
                </p>
              </div>
            </div>
        </div>
      </div> */}

    
    </>
  );
}

export default Home;

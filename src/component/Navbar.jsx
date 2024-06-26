import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setmode } from '../reducers/Mode'; // Assuming setmode is your action creator
import { useDispatch, useSelector } from 'react-redux';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import '../styles/Navbar.css'
import img2 from "../assets/img2.svg"

function Navbar() {
  
  const mode = useSelector(state => state.theme.Mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
console.log(mode)
  const toggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    console.log("tttt" , newMode);
    dispatch(setmode(newMode));
  };

  return (
    <div className="nav">
       <nav className="navbar navbar-expand-lg fs-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
        
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="57" viewBox="0 0 458.823 500.824">
  <g id="Group_1496" data-name="Group 1496" transform="translate(-990.042 -37.085)">
    <g id="Group_1" data-name="Group 1" transform="translate(990.042 37.085)">
      <path id="Path_2" data-name="Path 2" d="M314.8-441.806c-104.335,70.813-100.534,155.833,56.066,127.578,162.012-22.946,275.758-109.011,210.191-167.622,119.466,35.084-11.36,179.519-191.177,210.862-256.786,45.257-240.042-86.35-75.08-170.817" transform="translate(-178.542 556.935)" fill={mode==="light"?"#0457a8":"white"}  fill-rule="evenodd"/>
      <path id="Path_3" data-name="Path 3" d="M186.278-292.2c189.479,51.451,355.773-7.44,458.823-139.531-16.989,30.45-40.479,60.9-77.86,91.351l46.577,93.23H540.131L515.1-299.082c-60.282,34.471-122.322,50-186.311,44.427l-.694,9.385H250.93l11.819-19.4a305.575,305.575,0,0,1-76.471-27.53" transform="translate(-186.278 600.671)"  fill={mode==="light"?"#0457a8":"white"} fill-rule="evenodd"/>
      <path id="Path_4" data-name="Path 4" d="M246.018-285.432l75.082-4.38L369.067-393.68l37.54,83.22,57.007-24.4L371.152-521.948Z" transform="translate(-121.58 521.948)" fill={mode==="light"?"#0457a8":"white"} fill-rule="evenodd"/>
    </g>
    <text id="Avisoft" transform="translate(1424.201 481.909)"fill={mode==="light"?"#0457a8":"white"} font-size="100" font-family="Dubai-Bold, Dubai" font-weight="700" letter-spacing="0.11em"><tspan x="-370.9" y="0">Avisoft</tspan></text>
  </g>
</svg>

        
      


        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="buttons d-flex">
            <div onClick={toggle} style={{ "cursor": "pointer" }}>
              {mode === "light" ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
   
  );
}

export default Navbar;

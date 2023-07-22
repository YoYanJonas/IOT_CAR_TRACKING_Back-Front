import React, { useState } from 'react';
import logo from "../logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import {IoLogOutOutline} from "react-icons/io5"
import axios from 'axios';


const Navbar = () => {
  const navigate=useNavigate();
  const [error, setError]=useState(false);
    const logout=async()=>{
      try{
        await axios.post("/user/logout")

        navigate("/")
      }catch(e){
        setError(true);
      }
  

    }

    return (
        <div>
          <nav
            className="navbar is-fixed-top has-shadow"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <NavLink to="/dashboard" className="navbar-item">
                <img src={logo} width="112" height="28" alt="logo" />
              </NavLink>
    
              {/* <a
                href="/dashboard"
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a> */}
            </div>
            {error &&(<div style={{display:"flex", justifyContent:"center", position:"fixed", top:"1vh", left:"50vw"}} class="block"><span class="tag is-danger" style={{textAlign:"center", margin:"auto"}}>Log out is not Successful. please try again.</span> </div>)}

    
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <button onClick={logout} className="button is-light">
                    <IoLogOutOutline/> Log out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
}


export default Navbar;
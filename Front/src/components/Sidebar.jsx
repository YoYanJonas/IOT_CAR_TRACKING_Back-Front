import React, {useState} from 'react';
import { IoLocation, IoHome, IoLogOut } from "react-icons/io5";
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';

const Sidebar = () => {
    
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
    <aside className="menu pl-2 has-shadow">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink to={"/dashboard"}>
            <IoHome /> Dashboard
          </NavLink>
        </li>
      </ul>
        <div>
          <p className="menu-label">Admin</p>
          <ul className="menu-list">
            <li>
              <NavLink to={"/getGadget"}>
                <IoLocation /> Add Gadget
              </NavLink>
            </li>
          </ul>
        </div>

      <p className="menu-label">Settings</p>
      <ul className="menu-list">
        <li>
          <button onClick={logout} className="button is-white">
            <IoLogOut /> Logout
          </button>
        </li>
      </ul>
    </aside>
    {error &&(<div style={{display:"flex", justifyContent:"center", position:"fixed", top:"1vh", left:"50vw"}} class="block"><span class="tag is-danger" style={{textAlign:"center", margin:"auto"}}>Log out is not Successful. please try again.</span> </div>)}

  </div>
  )
}



export default Sidebar;
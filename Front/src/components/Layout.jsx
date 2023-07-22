import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Layout = ({children, parent_cb}) => {
    // const [user, setUser]=useState("");
    const navigate= useNavigate();

    useEffect(()=>{
        (
            async()=>{
                try{
                const {data}= await axios.get("/user/");
                parent_cb(data.name);
            }catch(e){
                // navigate("/");
            }
            }
        )()
    }, [])
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Layout;
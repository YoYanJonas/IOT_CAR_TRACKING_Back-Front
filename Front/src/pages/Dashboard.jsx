import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {PigeonMap} from "../components/MapPigeon"
import Welcome from '../components/Welcome';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser]=useState("");
  const [error, setError]=useState(false);
  const[data, setData]=useState([]);

  useEffect(()=>{
    (
        async()=>{
            try{
            const {data}= await axios.get("/gadget/all");
            setData(data);
        }catch(e){
            setError(true);
        }
        }
    )()
  },[])

  const cb_handler=(child_data)=>{
    setUser(child_data)
  }
  return (
    <Layout parent_cb={cb_handler}>
      <Welcome user={user} />
      <PigeonMap markers={data} ></PigeonMap>
      <div style={{display:"flex", justifyContent:"center"}}>
        <span style={{textAlign:"center", margin:"auto"}}>Here is Your Gadgets & Map was provided by Pigeon library.</span>
      </div>
      {error &&(<div style={{display:"flex", justifyContent:"center"}} class="block"><span class="tag is-danger" style={{textAlign:"center", margin:"auto"}}>Can not get gadgets status.</span> </div>)}

    </Layout>
  )
}

export default Dashboard;
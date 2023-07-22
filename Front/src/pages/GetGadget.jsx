import React, { useState } from 'react';
import Layout from '../components/Layout';
import MapForLocate from "../components/MapForLocate";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetGadget = () => {
  const navigate =useNavigate();
  const [showNotification, setShowNotification]=useState(true);
  const[error,setError]=useState(false);
  const [loader, setLoader]=useState(false);
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [latitude, setLatitude]=useState(0);
  const [longitude, setLongitude]=useState(0);
  const cb_handler=(point)=>{
    setLatitude(point[0])
    setLongitude(point[1])
  }

  const closeHandler=()=>{
    setShowNotification(false);
    setError(false);
  };

  const cancelHandler=()=>{
    navigate("/dashboard");
  }

  const submitHandler= async (e)=>{
    e.preventDefault();
    setLoader(true);
    axios.patch("/user/add/Device",{
      name,
      code,
      latitude,
      longitude
    }).then(()=>{
      navigate("/dashboard");
    }).catch(e=>{
      setError(true);
    })
  }
  return (
    <Layout>
      <div class="block" style={{marginTop:"1.6vh"}}>
      <h1 class="title">Getting a gadget</h1>
      </div>
      {showNotification && (<div class="notification is-info">
      <button onClick={closeHandler} class="delete"></button>
      Here we take a <b>gadget</b> for our user.
      Just Remember enter the correct information for gadget. otherwise you would need to connect to admin. :))
      </div>)}
      
      <form class="container" onSubmit={submitHandler}>
      <div class="field">
      <label class="label">Name</label>
      <div class="control">
      <input class="input" type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Name of Gadget"/>
      </div>
      <p class="help">Please consider the <b>Name</b> you enter to be correct and exact.</p>
      </div>
      <div class="field">
      <label class="label">Code</label>
      <div class="control">
      <input class="input" type="text" value={code} onChange={(e)=>setCode(e.target.value)} placeholder="Code of Gadget"/>
      </div>
      <p class="help">Please consider the <b>Code</b> you enter to be correct and exact.</p>
      </div>
      <div class="field is-grouped is-grouped-right">
      <p class="control">
      <button onClick={cancelHandler}class="button is-light" type="reset">
      Cancel
       </button>
       </p>
      <p class="control">
      <button class="button is-primary" disabled={name==="" && code ===""} type="submit"> Submit
      </button>
      </p>
      </div>

      </form>
      
      {loader && (<div style={{display:"flex", alignItems:"center" ,justifyContent:"center"}} class="block">
      <progress style={{width:"16vw"}} class="progress is-small" max="100"></progress>
      </div>)}


      {error &&(<div onClick={closeHandler}style={{display:"flex", justifyContent:"center"}} class="block"><span class="tag is-danger" style={{textAlign:"center", margin:"auto"}}>Not successful.</span> </div>)}
      <MapForLocate cbFunction={cb_handler}></MapForLocate>
    </Layout>
  )
};


export default GetGadget;

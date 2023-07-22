import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const Login = () => {
    const [phone, setPhone]= useState("");
    const [password, setPassword]=useState("");
    const [redirect, setRedirect]=useState(false);
    const[error, setError]=useState(false);
    const navigate= useNavigate();

    const submit_handler= async (e)=>{
        e.preventDefault();
       await axios.post("/user/login",{
            phone,
            password
        }).then(res=>{
            if(res.data.user.phone){
            setRedirect(true);}}
        ).catch(e=>{
            setError(true);
        })
        
    }
    if (redirect){
        navigate("/dashboard")
    }
  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={submit_handler} className="box">
                {error && <p style={{color:"#48c78e"}} className="has-text-centered"> Wrong password</p>}
                <h1 className="title is-2">Sign In</h1>
                <div className="field">
                  <label className="label">phone</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="phone"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button disabled={phone==="" && password ===""}
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Login 
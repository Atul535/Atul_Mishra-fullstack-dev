import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [logdata, setlogdata] = useState({ email: "", password: "" });

  const handleinput = () => (e) => {
    const { name, value } = e.target;
    setlogdata({ ...logdata, [name]: value });
  };
  
  const logged = () => {
    const logid = {
      email: logdata.email,
      password: logdata.password
    };
    axios.post("https://reqres.in/api/login", logid).then((res) => {
      console.log("Login successful")
      localStorage.setItem("token", JSON.stringify(res.data))
      localStorage.setItem("Login Credentials", JSON.stringify(logdata))
      navigate("/home")

    })
    
  };
  return (
    <>
      <div className="outer" id='outer'>
        <div className="inner" id='innerlog'>
          <input type="text" className='inp' onChange={handleinput()} name='email' placeholder='email' /><br />
          <input type="text" className='inp' onChange={handleinput()} name='password' placeholder='password' /><br />
          <button onClick={logged}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login

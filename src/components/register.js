
// import React from 'react'
// import './register.css'
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import Navbar from './NavforLogin'
// export default function Register() {

//   const navigate=useNavigate(false)

//   var [name,setFullName]= useState(null);
//  var [id,setId]=useState(null);
//  var [pwd,setPassword]=useState(null);

//  function signupdata(){
//    const registerdata={
//      fullname:name,
//      Id:id,
//      password:pwd
//    }
//    console.log(registerdata);
//    axios.post("http://localhost:2000/api/register",registerdata)
//    .then(response=> {
//      navigate('/login')
//    })
//    .catch(e=>console.log(e))

//   }
//   return (
//     <>
//     <img src="https://images.hindustantimes.com/img/2021/04/08/1600x900/KL_University_HT_1617871537419_1617871542598.jpg" alt="Aleq"  className='background' />
//     <Navbar/>
//        <div id="login-form-wrap">
//   <h2>Register</h2>
//   <form id="login-form">
//     <p>
//     <input type="text" id="username" value={name} placeholder="Name" onChange={(e)=>{setFullName(e.target.value)}} required/><i class="validation"><span></span><span></span></i>
//     </p>
    
//     <p>
//     <input type="text" id="username" value={id} placeholder="ID" onChange={(e)=>{setId(e.target.value)}} required/><i class="validation"><span></span><span></span></i>
//     </p>
//     <p>
//     <input type="text" id="email" value={pwd} placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} required/><i class="validation"><span></span><span></span></i>
//     </p>
//     <p>
//     <input type="text" id="username" name="username" placeholder="conform password" required/><i class="validation"><span></span><span></span></i>
//     </p>
//     <p>
//     <input onClick={signupdata} type="submit" id="login" value="Login"/>
//     </p>
//   </form>
//   <div id="create-account-wrap">
//     <a onClick={()=>{ navigate(`/login`)}} >Create Account</a>
//   </div>
// </div>
//     </>
//   )
// }
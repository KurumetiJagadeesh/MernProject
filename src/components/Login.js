import React from 'react'
// import me from './me.jpg';
import './com.css';
import { useNavigate } from "react-router-dom"
import Navbar from './NavforLogin';


export default function Login() {

  

let history=useNavigate();
const routechange=()=>{
  let path=`login`;
  history(path)
}

  return (
    <>
{/* 
<img className="background" src=".jpeg" alt="Aleq"> */}
  <img src="https://images.hindustantimes.com/img/2021/04/08/1600x900/KL_University_HT_1617871537419_1617871542598.jpg" alt="Aleq"  className='background' /><Navbar/>

  <center><h1 className='loginas'>LOGIN AS</h1></center>
<center ><div className="button" ><button className="btn1" onClick={routechange}><img src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png" alt="Aleq"  className="imgS" /></button> <button className="btn2" onClick={routechange}><img src="https://icon-library.com/images/faculty-icon/faculty-icon-7.jpg" alt="Aleq"  className="imgS" /></button> <button onClick={routechange} className="btn3"><img src="https://www.pngkey.com/png/full/433-4330215_parents-parent-icon-png-blue.png" alt="Aleq"  className="imgS" /></button>
<br/>
</div>

</center>
<h3 className="option1">Student</h3> 
  <h3 className="option2">Faculity</h3> 
  <h3 className="option3">Parent</h3> 

    </>

  )
}

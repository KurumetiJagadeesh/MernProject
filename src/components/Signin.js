import React from 'react'
import './signin.css';
import { useNavigate  } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios';



       
export default function Signin() {
 
  const navigate=useNavigate(false)

   var [fname,setFullName]= useState(null);
  var [id,setId]=useState(null);
  var [pswd,setPassword]=useState(null);

  function signupdata(){
    const registerdata={
      fullname:fname,
      id:id,
      password:pswd
    }
    console.log(registerdata);
    axios.post("http://localhost:2000/api/register",registerdata)
    .then(response=> {
      navigate('/login')
    })
    .catch(e=>console.log(e))

  }
  return (
    <>
    


	<div className="mainBody">
	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true" style={{color: 'red'}}>Login</label>
					
					<input type="String" name="email" placeholder="Id" required />
					<input type="password" name="pswd" placeholder="Password" required />
					<button className="butOOn" onClick={()=>navigate('/home')}>Login</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" placeholder="Full Name" value={fname} onChange={(e)=>{setFullName(e.target.value)}} required/>
                    <input type="text" placeholder="College ID" value={id} onChange={(e)=>{setId(e.target.value)}} required/>
					
					<input type="password" name="pswd" placeholder="Password" value={pswd} onChange={(e)=>{setPassword(e.target.value)}} required/>
          <input type="password" name="pswd" placeholder="Conform Password" value={pswd} required/>
					{/* <button className="butOOn">Sign up</button> */}
					<button type='submit' value='SignUp' onClick={signupdata} className='butOOn'>sign up</button>
					
          
				</form>
			</div>
	</div>

    </div>
    
    </>
  )
}

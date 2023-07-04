import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
//     <>
//     <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="/home">Home</Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" href="#">Dashboard</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" href="#">Attendence</Link>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item dropdown">
//           <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Cources
//           </Link>
//           <ul class="dropdown-menu">
//             <li><Link class="dropdown-item" to="/mern">MERN </Link></li>
//             <li><Link class="dropdown-item" to="/atfl">ATFL</Link></li>
//             <li><Link class="dropdown-item" to="/os">OS</Link></li>
//             <li><Link class="dropdown-item" to="/cns">CNS</Link></li>
//             <li><Link class="dropdown-item" to="/mp">MP</Link></li>
//             <li><Link class="dropdown-item" to="/daa">DAA</Link></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
      
//     </>
<>
<nav class="navbar fixed-top navbar-expand-lg  bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/attendence">Attendence</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Logout</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Courses
           </Link>
           <ul class="dropdown-menu">
             <li><Link class="dropdown-item" to="/mern">MERN </Link></li>
             <li><Link class="dropdown-item" to="/atfl">ATFL</Link></li>
            <li><Link class="dropdown-item" to="/os">OS</Link></li>
             <li><Link class="dropdown-item" to="/cns">CNS</Link></li>
             <li><Link class="dropdown-item" to="/mp">MP</Link></li>
             <li><Link class="dropdown-item" to="/daa">DAA</Link></li>
           </ul>
         </li>
      </ul>
      <button className="butn" to="/profile">
        profile
      </button>
    </div>
  </div>
</nav>
</>

  )
}

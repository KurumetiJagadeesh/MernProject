import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Pagenotfound from './components/Pagenotfound';
 import Home from './components/Home';
import Signin from './components/Signin';
import Mern from './components/Mern';
import MP from './components/MP';
import DAA from './components/DAA';
import CNS from './components/cns';
import Atfl from './components/Atfl';
import OS from './components/OS';
import Cources from './components/Cources';
import Register from './components/register';
// import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/atfl" element={<Atfl/>}/>
    <Route path='/daa' element={<DAA/>}/> 
    <Route path='/mern' element={<Mern/>}/>
    <Route path='/mp' element={<MP/>}/>
    <Route path='/os' element={<OS/>}/>
    <Route path='/cns' element={<CNS/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/cources' element={<Cources/>} />
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
    </>
  );
}

export default App;

import React,{useState} from 'react'
import './Navbar.css';
import logo from "../../imageandvideo/logo2.png";


 function Navbar() {
   const [Click,setClick]= useState("");
  return (
       <div className='navbar'>
          <div className='logo'>
           <img src={logo} alt=''/>
          </div>
          <ul className='list-items'>
           <li onClick={()=>{setClick("Home")}}><a style={{textDecoration:'none'}} href='/'>Home</a>{Click==="Home"?<hr/>:<></>}</li>
           <li onClick={()=>{setClick("About")}}><a style={{textDecoration:'none'}} href='#side-line'>About</a>{Click==="About"?<hr/>:<></>}</li>
           <li onClick={()=>{setClick("Connect")}}><a style={{textDecoration:'none'}} href='#links-icon'>Connect</a>{Click==="Connect"?<hr/>:<></>}</li>
          </ul>
       </div>
  )
}
export default Navbar;

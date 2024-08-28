import React from 'react'
import { IoLogoAngular } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
   <>
   <div className='h-[72px] shadow sticky z-50 top-0 flex items-center justify-around'>
    
    <div className = "flex" >
      <Link to = "/" className = "flex items-center" >
       <IoLogoAngular className='text-3xl cursor-pointer' /> 
       <h2> Logo </h2>
       </Link>
     </div>
    <ul className='flex items-center gap-3'>
      <li>
        <NavLink to = "/" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
         Home </NavLink> </li>   

         <li>
        <NavLink to = "/about" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
         About </NavLink> </li>   
         <li>
        <NavLink to = "/contact" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
         Contact </NavLink> </li> 

         <li>
        <NavLink to = "/github" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
         Github </NavLink> </li>    
     
    </ul>
    <div className='flex gap-5'>
      <button> Login</button>
      <button> Get Started </button>
    </div>
  
   </div>
   </>
  )
}

export default Header
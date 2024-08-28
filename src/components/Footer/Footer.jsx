import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoLogoAngular } from 'react-icons/io';

const Footer = () => {
  return (
    <>
    <div className='flex justify-around gap-3 items-center'>

    <div className = "flex" >
      <Link to = "/" className = "flex items-center" >
       <IoLogoAngular className='text-3xl cursor-pointer' /> 
       <h2> Logo </h2>
       </Link>
     </div>
     
     <div className='flex gap-5'>
     <div className = "flex gap-4 flex-col">
      <h2> RESOURCES </h2>
      <Link to ="/"> Home </Link>
      <Link to ="/"> About </Link>
     </div>

     <div className = "flex gap-4 flex-col">
      <h2> FOLLOW US </h2>
      <Link to ="/"> Github </Link>
      <Link to ="/"> Discord </Link>
     </div>

     <div className = "flex gap-4 flex-col">
      <h2> LEGAL </h2>
      <Link to ="/"> Privacy Policy </Link>
      <Link to ="/"> Terms & Conditions </Link>
     </div>
     </div>
    </div>
    </>
  )
}

export default Footer
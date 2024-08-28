import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
  return (
    <div className = 'bg-red-500 text-white p-5 text-center text-xl'>User: {userid}</div>
  )
}

export default User
import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Adminnav = () => {
  return (
    <div style={{display:"flex" ,  alignItems:"center" , justifyContent:"center" , height:"50px", gap:"40px" , backgroundColor:"lightblue",
    marginBottom:"20px"}}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/reports"}>Reports</Link>
      
    </div>
  )
}

export default Adminnav

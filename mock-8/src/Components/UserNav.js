import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Usernav = () => {
  return (
    <div style={{display:"flex" ,  alignItems:"center" , justifyContent:"center" , height:"50px", gap:"40px" , backgroundColor:"lightpink",
    marginBottom:"20px"}}>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/signin"}>Sign in</Link>
        <Link to={"/movies"}>Movies</Link>
      
    </div>
  )
}

export default Usernav

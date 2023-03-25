import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    
  return (
    <div style={{display:"flex", gap:"40px", marginTop:"50px", marginLeft:"40%"}}>
        <a href="/login"><Button bg={"red.400"} >Admin</Button></a> 
      
       <a href="/signup"><Button bg={"blue.400"}>User</Button></a>

    </div>
  )
}

export default Home

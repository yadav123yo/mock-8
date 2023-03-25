import React,{useState} from 'react'
import { loginDetails } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.auth)

    const [inputData, setInputData] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const {name,value} = e.target;
        setInputData({...inputData, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(loginDetails(inputData))
        .then(res => {
            console.log(res.type)
            if(res.type == 'LOGIN_SUCCESS'){
                localStorage.setItem("token","yogesh")
                alert("login success")
                navigate("/dashboard")
            }  else{
                alert("login failed")
            }
        })
    }

    
  return (
    <div>
      <form action="" style={{marginTop:"20px"}}>
     Enter Email :   <input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="email" name="email" id="email" onChange={handleChange} placeholder="Enter email"/> <br />
      Enter Password :  <input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="password" name="password" id="Password" placeholder='Password' onChange={handleChange} /> <br />
        <button style={{border:"1px solid red", padding:"5px 5px", borderRadius:"10px"}} onClick={handleSubmit}>Login </button> <br />
      </form>
    </div>
  )
}

export default Login


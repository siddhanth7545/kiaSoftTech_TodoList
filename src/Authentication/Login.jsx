import React,{useState} from 'react'
import axiosInstance from '../services/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import Home from './../Navbar/Home';


const Login = () => {
  let navigate=useNavigate()

  let [state,setState]= useState({
    userEmail:"",
    password:""
  })

  let {userEmail,password}=state
  let handleChange=(e)=>{
    let name=e.target.name
    let value=e.target.value

    setState({...state,[name]:value})
  }
  let handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      let payload={
        userEmail,
        password
      }

      let {data}=await axiosInstance.post("/authenticate",payload)
      let token=data.token
      let role=data.role
      console.log(token);
      navigate("/Home")

      if(token){
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        
      }
      else{
        localStorage.removeItem("token",token)
        localStorage.removeItem("role",role)
      }
    }
    catch{
      console.log("unable")
    }
  }

  return (
    <>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="userEmail">User Email</label><br />
                <input type="email" name='userEmail' placeholder='User Email' id="userEmail" value={userEmail} onChange={handleChange}/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name='password' id="password" placeholder='Password' value={password}  onChange={handleChange} /><br />
                <button >SUBMIT</button>

            </form>
    </>
  )
}

export default Login
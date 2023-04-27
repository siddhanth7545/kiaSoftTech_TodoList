import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Reg.css"
import axiosInstance from "../services/AxiosInstance"

const Register = () => {
    let  navigate = useNavigate()
    let [state,setState] = useState({
        userName : "",
        gender : "",
        dob : "",
        phone : "",
        email : "",
        password : ""
    })
    let {userName,gender,dob,phone,email,password}=state

    let handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(state);
        try{
            let payload={userName,gender,dob,phone,email,password}
          let data=  await axiosInstance.post("/users/save",payload)
          console.log(data)
            navigate("/Login")
        }
        catch{
            console.log("unable to connect to server")
        }
    }
    let handleChange = (e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

  return (
        <>
            <form  action="" onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" name="userName" placeholder="Enter name" value={userName}
                 onChange={handleChange}  />

                <label htmlFor="gender">Gender:</label>
                <div>
                    <label htmlFor="male">Male</label>
                    <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    />
                </div><br/>

                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    name='dob'
                    id="dob"
                    value={dob}
                    required
                    onChange={handleChange}
                /><br/>

                <label htmlFor="phone">Mobile Number:</label>
                <input
                    type="number"
                    id="phone"
                    name='phone'
                    maxLength="10" minLength="10" value={phone}
                    onChange={handleChange}
                /><br/>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                /><br/>

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                /><br/>

                <button>Register</button>

            </form>
        
        
        </>
  )
}

export default Register
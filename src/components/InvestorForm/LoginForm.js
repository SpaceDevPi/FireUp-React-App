import { radioClasses } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
 
function LoginForm() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(false)

    const submitHandler= async (e) => {
    e.preventDefault(); 
    try {
         const config ={
             headers : {
                 "content-type" : "application/json",
             },
         };
         setLoading(true); 
         const {data} = await axios.post(
             "http://localhost:5000/api/investors/loginInvestor",
             {
                 email, 
                 password, 
                 
             }, 
             config
         )
         localStorage.setItem('userInfo', JSON.stringify(data))  
         console.log(data)
        }
       
    catch (error) {
        setError(error.response.data.message); 
        
    }
        
    }



  return (
    <div className="form-Login" >

<div className="progressbar">
      <div
        style={{ width: "100%" }}
      ></div>
    </div>
    <div className="form-container">
      <div className="personal-info-container">
      
        <label><h1>Login Investor</h1></label>
    <Form className="personal-info-container" onSubmit={submitHandler} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <br></br>
    <Form.Control 
    type="email" 
    placeholder="Enter email"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <br></br>
    <Form.Control 
    type="password" 
    placeholder="Password"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>
  
  <Button  className="button" type="submit" >
    Submit
  </Button>
</Form> 
</div>
<Col>
New Investor? <Link to="/RegestrationInvestor">Register Here</Link>
</Col>
</div>
</div>
  );
}

export default LoginForm;




import { radioClasses } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { queryApi } from "../utils/queryApi";

 
function LoginForm() {

  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
    
  });
    const { email , password } = formData 
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(false)

    const submitHandler= async (e) => {
    e.preventDefault(); 
    console.log(formData)
    const [res , err ] = await queryApi('investors/newInvestor', formData , 'POST' , false );  
        
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
    value={formData.email}
    onChange={(event) =>
      setFormData({ ...formData, email: event.target.value })
    }
    />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <br></br>
    <Form.Control 
    type="password" 
    placeholder="Password"
    value={formData.password}
    onChange={(event) =>
      setFormData({ ...formData, password: event.target.value })
    }
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




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginInvestor, reset } from '../../services/auth/authSlice';
import Spinner from '../../components/Spinner';
import { GoogleLogin } from 'react-google-login';

 
function LoginForm() {
 

 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [formData, setFormData] = React.useState({
  email: '',
  password: '',
});

const { email, password} = formData

const dispatch = useDispatch()
const navigate = useNavigate()

const {investor, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

useEffect(() => {
  if (investor) {
    navigate('/dashboardInvestor');
  }
}, [investor, navigate]);

useEffect(() => {
  if (isError) {
      toast.error(message)
  }
  if (isSuccess || investor) {
      navigate('/dashboardInvestor')
  }

  dispatch(reset())
}, [isError, isSuccess, investor, message, navigate, dispatch])

if (isLoading) {
  return <Spinner />
}

const onChange = (e) => {
  setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
  }))
}

const onSubmit = (e) => {
  e.preventDefault()
  const userData = {
      email,
      password
  }

  dispatch(loginInvestor(userData))
}
  //   const { email , password } = formData 
  //   const [error , setError] = useState(false)
  //   const [loading , setLoading] = useState(false)

  //   const submitHandler= async (e) => {
  //   e.preventDefault(); 
  //   console.log(formData)
  //   const [res , err ] = await queryApi('investors/loginInvestor', formData , 'POST' , false );  
  //   if(err){
  //     setErrors({
  //         visbile: true,
  //         message: JSON.stringify(err.errors,null,2)
  //     });
  // }else {
  //   history('/investorDashbord')
  // } 
        
  //   }
  const responseGoogle = async (response)=> {
    console.log(response)
  }

  return (

    // <>
    //   <section className="heading">
    //     <h1>
    //       <FaSignInAlt /> Login
    //     </h1>
    //     <p>Login and start rising funds</p>
    //   </section>

    //   <section className="form">
    //     <form onSubmit={onSubmit}>
    //       <div className="form-group">
    //         <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={onChange} />
    //       </div>
    //       <div className="form-group">
    //         <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={onChange} />
    //       </div>
          
    //       <div className="form-group">
    //         <button type="submit" className='btn btn-block'>Sign Up</button>
    //       </div>
    //     </form>
    //   </section>
    // </>
    <div className="form-Login" >

<div className="progressbar">
      <div
        style={{ width: "100%" }}
      ></div>
    </div>
    <div className="form-container">
      <div className="personal-info-container">
      
        <label><h1>Login Investor</h1></label>
    <Form className="personal-info-container" onSubmit={onSubmit} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <br></br>
    <Form.Control 
    className="input"
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
    className="input"

    placeholder="Password"
    value={formData.password}
    onChange={(event) =>
      setFormData({ ...formData, password: event.target.value })
    }
    />
  </Form.Group>
  
  <button  className="button" type="submit" >
    Submit
  </button>
</Form> 
<div className="social">
                <GoogleLogin
                    clientId="1038694018186-j755gahor1ug0frbtpm8i9ljp9h7jn5n.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
</div>
</div>

<Col>
New Investor? <Link to="/RegestrationInvestor">Register Here</Link>
</Col>
</div>
</div>
  );
}

export default LoginForm;

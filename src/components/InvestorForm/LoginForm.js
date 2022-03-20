import { radioClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginInvestor from "../../services/authInvestor/authService";
import reset from "../../services/authInvestor/authService";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { investor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authInvestor
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || investor) {
      navigate("/dashboard");
    }

  //  dispatch(reset());
  }, [isError, isSuccess, investor, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const investorData = {
      email,
      password,
    };

    dispatch(loginInvestor(investorData));
  };

  if (isLoading) {
    return <Spinner />
}


  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start rising funds</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={onChange} />
          </div>
          
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Sign Up</button>
          </div>
        </form>
      </section>
    </>
    // <div className="form-Login">
    //   <div className="progressbar">
    //     <div style={{ width: "100%" }}></div>
    //   </div>
    //   <div className="form-container">
    //     <div className="personal-info-container">
    //       <label>
    //         <h1>Login Investor</h1>
    //       </label>
    //       <Form className="personal-info-container" onSubmit={onSubmit}>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <br></br>
    //           <Form.Control
    //             className="input"
    //             type="email"
    //             placeholder="Enter email"
    //             value={email}
    //             onChange={onChange}
    //           />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <br></br>
    //           <Form.Control
    //             type="password"
    //             className="input"
    //             placeholder="Password"
    //             value={password}
    //             onChange={onChange}
    //           />
    //         </Form.Group>

    //         <Button className="button" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </div>
    //     <Col>
    //       New Investor? <Link to="/RegestrationInvestor">Register Here</Link>
    //     </Col>
    //   </div>
    // </div>
  );
}

export default LoginForm;

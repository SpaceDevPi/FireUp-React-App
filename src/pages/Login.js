import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../services/auth/authSlice";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/appContext";
import GoogleButton from "react-google-button";

function Login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { socket } = useContext(AppContext)

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { entrepreneur, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }else if (isSuccess) {
      socket.emit('new-user')
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [isError, isSuccess, entrepreneur, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    if (email === "" || password === "") {
      toast.error("Please fill all the fields");
    } else {
      dispatch(login(userData));
    }
  };

  const redirectToGoogleSSO = async () => {
    const googleLoginUrl = `${process.env.REACT_APP_API_URL}/auth/google`;
    const newWindow = window.open(googleLoginUrl, "_blank", "width=500,height=600");
    
  }


  return (
    <div className="form-Login">
      <div className="progressbar">
        <div style={{ width: "100%" }}></div>
      </div>
      <div className="form-container">
        <div className="personal-info-container">
          <label>
            <h1>Login Contractor</h1>
          </label>
          <Form className="personal-info-container" onSubmit={onSubmit}>
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

            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        </div>

        <Col>
          Get Funding ? <Link to="/signUpContractor">Register Here</Link>
        </Col>
        <Col>

          <GoogleButton onClick={redirectToGoogleSSO}/>
          
        </Col>
      </div>
    </div>
  );
}

export default Login;

// import React from "react";
// import { FaSignInAlt } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { login, reset } from '../services/auth/authSlice';

// import { useFormik } from "formik";
// import * as Yup from "yup";

// const LoginSchema = Yup.object().shape({
//   password: Yup.string()

//     .min(2, "Too Short!")

//     .max(50, "Too Long!")

//     .required("Required"),

//   email: Yup.string().email("Invalid email").required("Required"),
// });

// const Login = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "khaled@gmail.com",
//       password: "0000",
//     },
//     onSubmit: (values) => {
//       axios
//         .post("http://localhost:5000/api/entrepreneurs/login", values)
//         .then((res) => {
//           localStorage.setItem("token", res.data.token);
//         })
//         .catch((err) => {
//           console.log(err);
//           toast.error("Login Failed");
//         });
//       // get the user data with the token using bearer token

//       axios
//         .get("http://localhost:5000/api/entrepreneurs/me", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         })
//         .then((res) => {
//           console.log(res.data);
//           localStorage.setItem("user", JSON.stringify(res.data));

//           window.location.href = "/dashboard";
//         })
//         .catch((err) => {
//           console.log(err);
//           toast.error("Login Failed");
//         });
//     },
//     validationSchema: LoginSchema,
//   });

//   return (
//     <div className="form ">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-container">
//           <div className="header">
//             <h1>Login</h1>
//           </div>
//           <div className="body">
//           <div className="personal-info-container">
//             <label htmlFor="email">Email Address</label>

//             <input
//               id="email"
//               name="email"
//               type="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />

//             <label htmlFor="firstName">password</label>

//             <input
//               id="password"
//               name="password"
//               type="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//             />
//             </div>
//           </div>
//           <div className="footer">
//             <button type="submit">Submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

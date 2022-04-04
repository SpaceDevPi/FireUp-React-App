import React from "react";
import { FaSignInAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "khaled@gmail.com",
      password: "0000",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/api/entrepreneurs/login", values)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Failed");
        });
      // get the user data with the token using bearer token

      axios
        .get("http://localhost:5000/api/entrepreneurs/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));

          window.location.href = "/dashboard";
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Failed");
        });
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className="form ">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="header">
            <h1>Login</h1>
          </div>
          <div className="body">
          <div className="personal-info-container">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <label htmlFor="firstName">password</label>

            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            </div>
          </div>
          <div className="footer">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Alert } from "antd";
import FileUpload from "../../../utils/FileUpload.js";
import Axios from "axios";
// import "./CreateProject.css";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import CheckBox from "../Section/CheckBox";
import { Category } from "../Section/Datas";
import { queryApi } from "../../../utils/queryApi";
import { useNavigate } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useApi } from "../../../hooks/useApi.js";

const { Title } = Typography;
const { TextArea } = Input;

// const category = [
//     { key: 1, value: "Agriculture" },
//     { key: 2, value: "Art" },
//     { key: 3, value: "Buisness to Buisness" },
//     { key: 4, value: "Design" },
//     { key: 5, value: "E-commerce" },
//     { key: 6, value: "Engineering" },
// ]
export default function CreateProjectLive(props) {
  const navigate = useNavigate();
  const { entrepreneur } = useSelector((state) => state.auth);
  const [projects,err,reload] = useApi('project/getApprovedProjectsByContractorId/' + entrepreneur._id);

  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    link: "",
    idproject: "",
    date: "",
    state: "coming",
    contractor_id: entrepreneur._id
  });
  const {
  
    link,
    idproject,
    date,
    state


  } = formData;



  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    setIsSubmit(true);
    console.log("is submit " + isSubmit);
    console.log(
      "(Object.keys(formErrors).length : " + Object.keys(formErrors).length
    );

  

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("okkkk");
      const [, err] = await queryApi(
        "projectlive/newProjectLive",
        formData,
        "POST",
        false
      );
      if (err) {
        setShowLoader(false);

        console.log(formData);
      } else {
        console.log(formData);

        alert("your Live has been posted succesfully");

        navigate("/managemyprojects");
      }
    } else {
    }
  };


  return (
    <>
      <Container>
        <div className="container">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#F57C00",
            }}
          >
            Plan a Live Video
          </h1>

          {/* <NavLink to="/">home2</NavLink> */}

          <form className="mt-5" onSubmit={onSubmit}>
            <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.title}</FormError>

                <label for="exampleInputEmail1" class="form-label">
                  Link of the video
                </label>
                <input
                  type="text"
                  name="link"
                  value={link}
                  onChange={(e) => onChange(e)}
                  placeholder="Link of the Live"
                  class="form-control"
                />
              </div>

         
              <div class="mb-3 col-lg-6 col-md-6 col-12">

                <label for="exampleInputPassword1" class="form-label">
                  Date of live
                </label>
                <input
                  type="datetime-local"
                  min={date}
                  value={date}
                  name="date"
                  onChange={(e) => onChange(e)}
                  placeholder="date of live"
                  class="form-control"
                />
              </div>

         


              <div class="mb-3 col-lg-6 col-md-6 col-12">

                <label for="exampleInputPassword1" class="form-label">
                  Category
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={idproject}
                  name="idproject"
                  onChange={(e) => onChange(e)}
                >
                  <option selected>Choose the project</option>
                  {projects ? (
                    projects.map((projects) => (
                      <option value={projects._id}>{projects.title}</option>
                    ))
                  ) : (
                    <option value="art">art</option>
                  )}
                </select>
              </div>


              

              


              
              <div>
                <button
                  type="submit"
                  disabled={setIsSubmit}
                  class="newUserButton"
                >
                  Create{" "}
                </button>
              </div>
              <br></br>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: 0 0 15px #ddd;
  background-color: #e5e5e5;
`;

export const ButtonInvest = styled(LinkS)`
  color: #fff;
  background: #f57c00;
  font-size: 1.2rem;
  font-weigth: 600;
  padding: 0.7rem 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormError = styled.p`
  color: #f74b1b;
`;

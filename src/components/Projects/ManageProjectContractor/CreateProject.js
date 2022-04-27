import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Alert } from "antd";
import FileUpload from "../../../utils/FileUpload.js";
import Axios from "axios";
import "./CreateProject.css";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import CheckBox from "../Section/CheckBox";
import { Category } from "../Section/Datas";
import { queryApi } from "../../../utils/queryApi";
import { useNavigate } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
export default function CreateProject(props) {
  const navigate = useNavigate();
  const { entrepreneur } = useSelector((state) => state.auth);

  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
    end_date: "",
    amount_to_collect: "0",
    images: "",
    offering_type: "",
    category: "",
    price_per_share: "0",
    place: "",
    contractor_id :entrepreneur._id

  });
  const {
    title,
    description,
    email,
    end_date,
    amount_to_collect,
    images,
    offering_type,
    category,
    price_per_share,
    place,

  } = formData;

  const [Images, setImages] = useState("");

  const onChangeFile = (e) => {
    onDrop(e.target.files);
    setFormData({ ...formData, images: e.target.files[0].name });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!title) {
      errors.title = "Title is required";
    }

    if (!description) {
      errors.description = "description is required";
    }

    if (!end_date) {
      errors.end_date = "End date is required";
    }
    // else if(end_date < new Date(). )
    // errors.end_date = "End date must be superior to Today date ";
    if (amount_to_collect === 0) {
      errors.amount_to_collect = "Amount to collect is required";
    }
    if (!offering_type) {
      errors.offering_type = "Offering type is required";
    }
    if (!category) {
      errors.category = "Category is required";
    }
    if (price_per_share === 0) {
      errors.price_per_share = "Price per share is required";
    } else if (price_per_share > amount_to_collect) {
      errors.price_per_share =
        "Price per share cannot be superior to amount collect";
    }
    if (!place) {
      errors.place = "Place is required";
    }
    if (!images) {
      errors.images = "Images is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    setIsSubmit(true);
    console.log("is submit " + isSubmit);
    setFormErrors(validate());
    console.log(
      "(Object.keys(formErrors).length : " + Object.keys(formErrors).length
    );

  

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("okkkk");
      const [, err] = await queryApi(
        "project/newproject",
        formData,
        "POST",
        false
      );
      if (err) {
        setShowLoader(false);

        console.log(formData);
      } else {
        console.log(formData);

        alert("your project has been posted succesfully");

        navigate("/managemyprojects");
      }
    } else {
    }
  };

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server
    Axios.post(
      "http://localhost:5000/api/project/uploadImage",
      formData,
      config
    ).then((response) => {
      if (response.data.success) {
        setImages(files[0].name);
      } else {
        alert("Failed to save the Image in Server");
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    setFormData({
      title: formData.title,
      description: formData.description,
      email: formData.email,
      end_date: formData.end_date,
      amount_to_collect: formData.amount_to_collect,
      images: "",
      offering_type: formData.offering_type,
      category: formData.category,
      price_per_share: formData.price_per_share,
      place: formData.place,

    });
    props.refreshFunction(newImages);
  };

  console.log("images :" + Images);

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

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
            Create Project
          </h1>

          {/* <NavLink to="/">home2</NavLink> */}

          <form className="mt-5" onSubmit={onSubmit}>
            <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.title}</FormError>

                <label for="exampleInputEmail1" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => onChange(e)}
                  placeholder="Name of your project "
                  class="form-control"
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.email}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  class="form-control"
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.end_date}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Date of end
                </label>
                <input
                  type="date"
                  min={today}
                  value={end_date}
                  name="end_date"
                  onChange={(e) => onChange(e)}
                  placeholder="date of end"
                  class="form-control"
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.amount_to_collect}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Amount to collect
                </label>
                <input
                  type="number"
                  name="amount_to_collect"
                  value={amount_to_collect}
                  onChange={(e) => onChange(e)}
                  placeholder="How much money you need to raise "
                  class="form-control"
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.offering_type}</FormError>
                <label for="exampleInputPassword1" class="form-label">
                  Offering type
                </label>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="offering_type"
                    onChange={(e) => onChange(e)}
                    id="equity"
                    value="equity"
                  />
                  <label for="equity">Equity</label>
                  <input
                    type="radio"
                    name="offering_type"
                    onChange={(e) => onChange(e)}
                    id="rewards"
                    value="rewards"
                  />
                  <label for="rewards">Rewards</label>
                  <input
                    type="radio"
                    name="offering_type"
                    onChange={(e) => onChange(e)}
                    id="donation"
                    value="donation"
                  />
                  <label for="donation">Donation</label>
                </div>
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.category}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Category
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={category}
                  name="category"
                  onChange={(e) => onChange(e)}
                >
                  <option selected>Choose Category</option>
                  {Category ? (
                    Category.map((Category) => (
                      <option value={Category.name}>{Category.name}</option>
                    ))
                  ) : (
                    <option value="art">art</option>
                  )}
                </select>
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.price_per_share}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Price per share
                </label>
                <input
                  type="text"
                  name="price_per_share"
                  value={price_per_share}
                  onChange={(e) => onChange(e)}
                  placeholder="price per share"
                  class="form-control"
                />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.place}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Place
                </label>
                <input
                  type="text"
                  name="place"
                  value={place}
                  onChange={(e) => onChange(e)}
                  placeholder="Place"
                  class="form-control"
                />
              </div>

              <div class="mb-3 col-lg-12 col-md-12 col-12">
                <FormError>{formErrors.description}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => onChange(e)}
                  placeholder="Describe your project"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <FormError>{formErrors.images}</FormError>

                <label for="exampleInputPassword1" class="form-label">
                  Image
                </label>
                <input
                  type="file"
                  name="images"
                  onChange={(e) => onChangeFile(e)}
                  placeholder="Image"
                  className="form-control"
                />
                {/* <FileUpload name="images" 
            onChange={(e) => onChangeFile(e)}  refreshFunction={updateImages} /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "350px",
                  height: "240px",
                  overflowX: "scroll",
                }}
              >
                <div onClick={() => onDelete(Images)}>
                  <img
                    style={{
                      minWidth: "300px",
                      width: "300px",
                      height: "240px",
                    }}
                    src={`http://localhost:5000/uploads/${Images}`}
                  />
                </div>
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

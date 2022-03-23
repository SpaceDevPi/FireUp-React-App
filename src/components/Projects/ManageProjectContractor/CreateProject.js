import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Alert } from 'antd';
import FileUpload from '../../../utils/FileUpload';
import Axios from 'axios';
import "./CreateProject.css";
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import CheckBox from '../Section/CheckBox';
import { Category } from '../Section/Datas';  
import { queryApi } from '../../../utils/queryApi';
import { useNavigate } from "react-router-dom";
import { NavLink, useParams } from 'react-router-dom'


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

  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email : "",
    end_date: "",
    amount_to_collect: "0",
    images: "",
    offering_type: "",
    category: "",
    price_per_share: "0",
    place:""
  });
  const { title, description, email,end_date,amount_to_collect,images, offering_type,category,price_per_share,place} = formData;


  const onChangeFile = (e) =>
  setFormData({ ...formData, images: e.target.files[0].name });

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });


  const [Images, setImages] = useState([])


const onSubmit = async (e) => {
  e.preventDefault();
  setShowLoader(true);
  const [, err] = await queryApi("project/newproject", formData, "POST", false);


  if (err) {
    setShowLoader(false);
    setError({
      visible: true,
      message: JSON.stringify(err.errors, null, 2),
    });
    console.log(formData)
  } else    { console.log(formData);
    setTimeout(()=>{
     alert('your project has been posted succesfully')

    },2000);
 navigate("/");
}
};
const [showAlert,SetShowAlert]= useState(false)

// const onFinish = (e)=>{
//   setTimeout(()=>{
//     // message.success('your project has been posted succesfully')
// showAlert(true)
//   },2000);
// }





const updateImages = (newImages) => {
  setImages(newImages)
}
    return (<> 
      <Container>
      <div className="container">
  
      <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Edit Project</h1>
  
              {/* <NavLink to="/">home2</NavLink> */}
  
              <form className="mt-5"  onSubmit={onSubmit}>
                  <div className="row">
  
                      <div class="row" >
                      {error.visible && <FormError>{error.message}</FormError>}
  
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputEmail1" class="form-label">Title</label>
                          <input type="text"  name="title"value={title}  onChange={(e) => onChange(e)} placeholder="Name of your project " class="form-control"   />
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Email</label>
                          <input type="email" placeholder="john@gmail.com" name="email" value={email}  onChange={(e) => onChange(e)}class="form-control" />
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Date of end</label>
                          <input type="date" value={end_date} name="end_date" onChange={(e) => onChange(e)}  placeholder="date of end" class="form-control" />
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Amount to collect</label>
                          <input type="number" name="amount_to_collect" value={amount_to_collect}  onChange={(e) => onChange(e)} placeholder="How much money you need to raise "class="form-control"  />
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Offering type</label>
                          <div className="newUserGender">
                          <input type="radio" name="offering_type" onChange={(e) => onChange(e)}  id="equity" value="equity" />
                          <label for="equity">Equity</label>
                          <input type="radio" name="offering_type"  onChange={(e) => onChange(e)}  id="rewards" value="rewards" />
                          <label for="rewards">Rewards</label>
                          <input type="radio" name="offering_type"   onChange={(e) => onChange(e)} id="donation" value="donation" />
                          <label for="donation">Donation</label>
                          </div>
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Category</label>
                          <select class="form-select" aria-label="Default select example" 
                   value={category}  name="category"
                   onChange={(e) => onChange(e)} >
     <option selected>Choose Category</option>
     {Category ? Category.map((Category) => (
    <option value={Category.name}>{Category.name}</option>

     )) :    ( <option value="art">art</option>)}

     </select>
                    </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Price per share
  </label>
                          <input type="text"  name="price_per_share" value={price_per_share}  onChange={(e) => onChange(e)} placeholder="price per share" class="form-control" />
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Place</label>
                          <input type="text" name="place" value={place}  onChange={(e) => onChange(e)} placeholder="Place"  class="form-control" />
                      </div>
                      <div class="mb-3 col-lg-12 col-md-12 col-12">
                          <label for="exampleInputPassword1" class="form-label">Description</label>
                          <textarea  name="description" value={description}  onChange={(e) => onChange(e)} placeholder="Describe your project"className="form-control" id="" cols="30" rows="5"></textarea>
                      </div>
                      <div class="mb-3 col-lg-6 col-md-6 col-12">
                          <label for="exampleInputPassword1" class="form-label">Image</label>
                          {/* <input type="file"  name="images" 
            onChange={(e) => onChangeFile(e)} placeholder="Image" className="form-control"/> */}
                      <FileUpload name="images" 
            onChange={(e) => onChangeFile(e)}  refreshFunction={updateImages} />
                      </div>
                      <button type="submit"  disabled={showLoader} class="newUserButton">Create </button>
                      <br></br>
                  </div>
              </form>
          </div>
          </Container>
           </>
 )

}

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-shadow: 0 0 15px #ddd;
    background-color : #E5E5E5;

`;


export const ButtonInvest = styled(LinkS)`
    color:#fff;
    background:#F57C00;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    cursor:pointer;

    display: flex;
    align-items: center;
    justify-content: center;

`

const FormError = styled.p`
  color: #f74b1b;
`;

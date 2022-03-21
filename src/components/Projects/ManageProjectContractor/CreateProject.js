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
  setFormData({ ...formData, images: e.target.File[0] });

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

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

const [Images, setImages] = useState([])

const updateImages = (newImages) => {
  setImages(newImages)
}
    return (
        <Container>
          {/* <Alert type="error" message="error" description="erreur ya 5raa" /> */}
    <div className="newUser">
    <h1 className="newUserTitle"> Add New Project</h1>

        <form className="newUserForm"  onSubmit={onSubmit}>

          <div className="newUserItem">
            <label>Title</label>
            <input type="text" name="title" value={title}  onChange={(e) => onChange(e)} placeholder="Name of your project " />
          </div>

         

          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" name="email" value={email}  onChange={(e) => onChange(e)}/>
          </div>


          <div className="newUserItem">
            <label>Date of end </label>
            <input type="date" name="end_date" value={end_date}  onChange={(e) => onChange(e)}  placeholder="date of end" />
          </div>


          <div className="newUserItem">
            <label>Amount to collect</label>
            <input type="text"   name="amount_to_collect" value={amount_to_collect}  onChange={(e) => onChange(e)} placeholder="How much money you need to raise " />
          </div>


          <div className="newUserItem">
            <label>Offering type </label>
            <div className="newUserGender">
            <input type="radio" name="offering_type" onChange={(e) => onChange(e)} id="equity" value="equity" />
              <label for="equity">Equity</label>
              <input type="radio" name="offering_type" onChange={(e) => onChange(e)} id="rewards" value="rewards" />
              <label for="rewards">Rewards</label>
              <input type="radio" name="offering_type" onChange={(e) => onChange(e)} id="donation" value="donation" />
              <label for="donation">Donation</label>
            </div>

            
          </div>
          <div className="newUserItem">
            <label>Category</label>
            {/*<select className="newUserSelect" onChange={(e) => onChange(e)} name="category" >
                    {Category ? Category.map(item => (
                
                        <option name="category"  id={item.name} value={item.name}>{item.name} </option>
                         ))
                   
                     : <p>err</p>}
                </select> */}
                            <div className="newUserGender">

               <input type="radio" name="category" onChange={(e) => onChange(e)} id="art" value="art" />
              <label for="equity">art</label>
              <input type="radio" name="category" onChange={(e) => onChange(e)} id="agriculture" value="Agriculture" />
              <label for="rewards">agriculture</label>
              <input type="radio" name="category" onChange={(e) => onChange(e)} id="design" value="Design" />
              <label for="donation">design</label> 
</div>
          </div>

          
     

          <div className="newUserItem">
            <label>Price per share</label>
            <input type="number"  name="price_per_share" value={price_per_share}  onChange={(e) => onChange(e)} placeholder="price per share" />
          </div>

          <div className="newUserItem">
            <label>Place</label>
            <input type="text" name="place" value={place}  onChange={(e) => onChange(e)} placeholder="Place" />
          </div>

       

          <div className="DescriptionItem">
            <label>Description</label>
            <textarea type="TextArea" name="description" value={description}  onChange={(e) => onChange(e)} placeholder="Describe your project" />
          </div>

          <div className="newUserItem">
            <label>Image</label>
            <input type="file"  name="images"
            onChange={(e) => onChangeFile(e)} placeholder="Image" />

          </div>
          <div className="newUserItem">
            <label>Image</label>
            
            {/* <FileUpload name="images"
            onChange={(e) => onChangeFile(e)} refreshFunction={updateImages} /> */}
          </div>
         {/* <ButtonInvest>Create</ButtonInvest>*/}
         <div>
          <button className="newUserButton" disabled={showLoader}> Create </button>
          </div>
        </form>
      </div>
      </Container>    )
}

const Container = styled.div`
    padding:20px;
    padding-left : 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-shadow: 0 0 15px #F57C00;
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
import React ,{useState}from 'react'
import { Typography, Button, Form, message, Input, Alert } from 'antd';
import FileUpload from '../../../utils/FileUpload.js';
import Axios from 'axios';
import "../ManageProjectContractor/CreateProject.css";
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import CheckBox from '../Section/CheckBox';
import { Category } from '../Section/Datas';  
import { queryApi } from '../../../utils/queryApi';
import { useNavigate } from "react-router-dom";
import { NavLink, useParams } from 'react-router-dom'

export default function CreatePost({projectname}) {

    const navigate = useNavigate();
    const {id} = useParams();
    const {nomprojet} = useParams();

    const [showLoader, setShowLoader] = useState(false);
    const [error, setError] = useState({ visible: false, message: "" });
    const [formData, setFormData] = useState({
      title: "",
      content: "",
      images : "",
      id_project: id,
     
    });
    const { title, content, images,id_project} = formData;
  
    const [Images, setImages] = useState('')

  const onChangeFile = (e) =>{
  onDrop(e.target.files)
    setFormData({ ...formData, images: e.target.files[0].name });

}

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  

  
  
const onDrop = (files) => {

  let formData = new FormData();
  const config = {
      header: { 'content-type': 'multipart/form-data' }
  }
  formData.append("file", files[0])
  //save the Image we chose inside the Node Server 
  Axios.post('http://localhost:5000/api/project/uploadImage', formData, config)
      .then(response => {
          if (response.data.success) {

              setImages(files[0].name)

          } else {
              alert('Failed to save the Image in Server')
          }
      })
}
  const onSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const [, err] = await queryApi("post/newpost", formData, "POST", false);
  
  
    if (err) {
      setShowLoader(false);
      setError({
        visible: true,
        message: JSON.stringify(err.errors, null, 2),
      });
      console.log(formData)
    } else    { console.log(formData);
      setTimeout(()=>{
       alert('your post has been posted succesfully')
  
      })
   navigate("/managemyprojects");
  }
  };
  const [showAlert,SetShowAlert]= useState(false)
  
  // const onFinish = (e)=>{
  //   setTimeout(()=>{
  //     // message.success('your project has been posted succesfully')
  // showAlert(true)
  //   },2000);
  // }
  
//   console.log("projectname  "+{projectname})
  
  
  const updateImages = (newImages) => {
    setImages(newImages)
  }
      return (<> 
        <Container>
        <div className="container">
    
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Create An Update Post For Your Project</h1>
        <h5 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'black'}}>Project Title :  {nomprojet}</h5>

                {/* <NavLink to="/">home2</NavLink> */}
    
                <form className="mt-5"  onSubmit={onSubmit}>
                    <div className="row justify-content-md-center">
    
                        <div class="row" >
                        {error.visible && <FormError>{error.message}</FormError>}
    
                        </div>
                        </div>
                        <div className="row justify-content-md-center">

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Title</label>
                            <input type="text"  name="title"value={title}  onChange={(e) => onChange(e)} placeholder="Name of your project " class="form-control"   />
                        </div>
                        </div>
                        <div className="row justify-content-md-center">

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea  name="content" value={content}  onChange={(e) => onChange(e)} placeholder="Describe your project"className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                    </div>
                    <div className="row justify-content-md-center">

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="file"  name="images" 
            onChange={(e) => onChangeFile(e)} placeholder="Image" className="form-control"/> 
                  
                        </div>
                        
                        
                        <div className="row justify-content-md-center">

                        <div class="mb-3 col-lg-6 col-md-6 col-12">

    <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/uploads/${Images}`} />

</div>
</div>
                        
                        </div>
                        <div className="row justify-content-md-center">

                        <button type="submit"  disabled={showLoader} class="newUserButton">Create </button>
                        </div> <br></br>
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
  
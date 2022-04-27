import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "../../styles/profile.css";
  import { useDispatch, useSelector } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  import {useApi} from '../../hooks/useApi'
  import {queryApi} from '../../utils/queryApi'
  import Axios from 'axios';
  
  
  export default function Profile() {
    

    const navigate = useNavigate();
    const { investor } = useSelector((state) => state.auth);
    const [errors, setErrors] = useState({ visbile: false, message: "" });

    useEffect(() => {
      if (!investor) {
        navigate('/LoginInvestor');
      }
    }, [investor, navigate]);
   const [toRender,err,reload] = useApi('investors/investorId/'+investor._id);
//const a = InvestorProfile;
const id = investor._id;
const [formData, setFormData] = useState({
    username:"",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber:"", 
    sexe: "",
    datOfBirth : "",
    adress: "",
    status:"", 
    accreditationForm:"",
    centerOfInterest :"" ,
    accountType :"", 
    image : ""
});

          console.log("my id is " + id)
          useEffect(() => {
            fetchData();
          }, [id]);

function status() {
       
          if (toRender.status ==0){
              return "Accredit Investor"; 
          }if (toRender.status ==1) {
            return "Non Accredit Investor";
          }

}
function AccreditationForm() {
       
  if (toRender.accreditationForm ==1){
      return "I invest on behalf of a trust with at least $5 million in assets."; 
  }if (toRender.accreditationForm ==2){
    return "I have individual net worth, that exceeds $1 million."; 
}if (toRender.accreditationForm ==3){
  return "I had income exceeding $200,000 in each year."; 
}if(toRender.accreditationForm ==4) {
    return "I have individual net worth $200,000 and I have sufficient knowledge to evaluate the merits and risks of startup investing..";
  }

}
function ShowAccreditForm() {
   var accreditForm = document.getElementById('accreditationform'); 
   var status =document.getElementById('status');
  if(status=="0"){
    accreditForm.style.visibility ='visible' ; 
  }
  if(status=="1"){
    accreditForm.style.visibility ='hidden' ; 
  }
  
}
console.log(toRender)
async function fetchData() {
  const [res, err] = await queryApi("investors/investorId/" + id);
  if (toRender!=null) {
  setFormData({
    username: toRender.username,
    firstName: toRender.firstName,
    lastName: toRender.lastName ,
    email: toRender.email,
    password: toRender.password,
    phoneNumber: toRender.phoneNumber, 
    sexe: toRender.sexe,
    datOfBirth : toRender.datOfBirth ,
    adress: toRender.adress,
    status: toRender.status, 
    accreditationForm: toRender.accreditationForm,
    centerOfInterest : toRender.centerOfInterest,
    accountType : toRender.accountType,
    image : toRender.image
    
  });
  setImages(res.image)
}
}
console.log(formData)



const { username, firstName, lastName,email ,password,phoneNumber,sexe,datOfBirth,adress,accreditationForm,centerOfInterest,accountType, image} = formData;



const history = useNavigate ();

const onSubmit = async (e) => {
  console.log(Images)
  if (Images!=='')
  formData.image=Images;
  e.preventDefault();
  //console.log(formData);
  const [, err] = await queryApi("investors/ubdateInvestor/" + id, formData, "PUT", false);
  if (err) {
    setErrors({
      visbile: true,
      message: JSON.stringify(err.errors, null, 2),
    });
    // navigate("/dashboardInvestor");
    
  } else navigate("/dashboardInvestor");
};
const [Images, setImages] = useState('')

const onChangeFile = (e) => {
  onDrop(e.target.files)

  setFormData({ ...formData, image: e.target.files[0].name });
};
const onDrop = (files) => {
  
  let formData = new FormData();
  const config = {
      header: { 'content-type': 'multipart/form-data' }
  }
  let f= files[0]
  formData.append("file", f)
  //save the Image we chose inside the Node Server 
  Axios.post('http://localhost:5000/api/articles/uploadImage', formData, config)
      .then(response => {
          if (response.data.success) {
            setImages(response.data.fileName)

          } else {
              alert('Failed to save the Image in Server')
          }
          console.log(response)
      })
}


  
    return (
      <div>
        
      { toRender ? (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">My Profile </h1>
          
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              
              <div className="userShowTopTitle">
                <span className="userShowUserTitle">Investor <b className="fireUp">FireUp</b></span>
               <span className ="userShowUserTitle">Welcome to our plateform <b className="fireUp">{toRender.firstName} {toRender.lastName} </b></span>

              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{toRender.username}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{toRender.datOfBirth}</span>
              </div>
              <div className="userShowInfo">
                
                <p>Gender : </p><span className="userShowInfoTitle">{toRender.sexe}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{toRender.phoneNumber}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{toRender.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{toRender.adress}</span>
              </div>
              
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Investement Information</span>
              <div className="userShowInfo">
                <p>Account type </p><span className="userShowInfoTitle">: {toRender.accountType}</span>
              </div>
              <div className="userShowInfo">
              <p>Status </p><span className="userShowInfoTitle">: {status()} </span>
              </div>
              <div className="userShowInfo">
              <p>Accreditation Form  </p><span className="userShowInfoTitle">: {AccreditationForm()} </span>
              </div>
              <div className="userShowInfo">
              <p>Center of interest  </p><span className="userShowInfoTitle">: {toRender.centerOfInterest} </span>
              </div>
              </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>


            <form onSubmit={onSubmit} className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={toRender.username}
                    className="userUpdateInput"
                    value={username}
                    onChange={(e) => {
                      setFormData({ ...formData, username: e.target.value });
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder={toRender.firstName}
                    className="userUpdateInput"
                    value={firstName}
                    onChange={(e) => {
                      setFormData({ ...formData, firstName: e.target.value });
                    }}                  />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder={toRender.lastName}
                    className="userUpdateInput"
                    value={lastName}
                    onChange={(e) => {
                      setFormData({ ...formData, lastName: e.target.value });
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={toRender.phoneNumber}
                    className="userUpdateInput"
                    value={phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Date Of birth</label>
                  <input
                    type="date"
                    className="userUpdateInput"
                    placeholder={toRender.datOfBirth}
                    value={datOfBirth}
                    onChange={(e) => {
                      setFormData({ ...formData, datOfBirth: e.target.value });
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={toRender.adress}
                    className="userUpdateInput"
                    value={adress}
                    onChange={(e) => {
                      setFormData({ ...formData, adress: e.target.value });
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Status </label>
                   <select className="userUpdateInput" id="status" 
                   value={status}
                    onChange={(e) => { setFormData({ ...formData, status: e.target.value });  }} >
     <option >{status()}</option>
    <option value="0">Accredit Investor</option>
    <option value="1">Non Accredit Investor</option>
     </select>
                
                </div>
                <div className="userUpdateItem">
                  <label>Acredit Status </label>
                  <div >
     <select id="accreditationform"   value={accreditationForm}
                    onChange={(e) => {
                      setFormData({ ...formData, accreditationForm: e.target.value });
                    }}    className="userUpdateInput"
       > 
    <option >{AccreditationForm()}</option>
    <option value="1"> I invest on behalf of a trust with at least $5 million in assets </option>
    <option value="2">I have individual net worth, that exceeds $1 million</option>
    <option value="3">I had income exceeding $200,000 in each year</option>
    <option value="4">I have individual net worth $200,000 and I have sufficient knowledge to evaluate the merits and risks of startup investing.</option>

     </select>
     </div>
                
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                {Images ? ( <img
                  className="userUpdateImg"
                  src={`${process.env.REACT_APP_API_URL_UPLOADS + '/' + Images}`}                    alt=""
                />) :('') }
                  {/* <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label> */}

                  <input type="file"  name="image"  
                                                    onChange={(e) => onChangeFile(e)}
                                                    placeholder="Image" className="form-control"/>
             
                  {/* <input type="file" id="file" style={{ display: "none" }} /> */}
                </div>
                <button className="button" >Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     ) : (<p></p>) }
     </div> );
  }
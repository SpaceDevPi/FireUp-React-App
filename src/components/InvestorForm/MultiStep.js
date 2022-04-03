import React from 'react'; 
import  { useState } from "react";
import  FormFirstStep  from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep"; 
import  FormThirdStep  from "./FormThirdStep";
import FormFour from "./FormFour"; 
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useNavigate  } from "react-router-dom";
import { sizeWidth } from '@mui/system';


 function MultiStep () {
  const history = useNavigate ();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [page, setPage] = useState(0);
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
    accountType :""
  });


  





  const FormTitles = ["Personal", "Professionnel ", "Investement" , "Center Of Interest"];
  const [errors,setErrors] = useState({visbile:false,message:""});
  const {username,firstName , lastName , email , password , phoneNumber , sexe ,datOfBirth , adress ,status ,accreditationForm ,centerOfInterest ,accountType} = formData; 


  const validate = values => {
    const errors = {};
    if (!username) {
        errors.username = "User name is required ";
    }
    if (!firstName) {
      errors.firstName = "First name is required";
  }
    if (!lastName) {
        errors.lastName = "Last name is required";
    }
    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid email address";
    }
    if (!phoneNumber) {
        errors.phoneNumber = "Phone number is required";
    }else if ((phoneNumber.length<8 && ![0-9])){
      errors.phoneNumber="Phone number should have 8 number"
    }
    if (!password) {
        errors.password = "passeword is required";
    }
    if (!adress) {
        errors.adress = "adresse is required";
    }
    if (!status) {
        errors.status = "status is required";
    }
    if (!accreditationForm) {
        errors.accreditationForm = "Required";
    }
    if (!centerOfInterest) {
        errors.centerOfInterest = "Required";
    }
    
    

    return errors;
};




  const PageDisplay = () => {
    

    if (page === 0) {
      return <FormFirstStep formData={formData} setFormData={setFormData} formErrors={formErrors} />;
    } else if (page === 1) {
      return <FormSecondStep formData={formData} setFormData={setFormData} formErrors={formErrors} />;
    }else if (page === 2) {
      return <FormThirdStep formData={formData} setFormData={setFormData} formErrors={formErrors} />
      ;
    } else {
      return <FormFour formData={formData} setFormData={setFormData} formErrors={formErrors} /> ;
    }
  };


  return (
    <div className="form">
    <div className="progressbar">
      <div
        style={{ width: page === 0 ? "25%" : page == 1 ? "50%" :page == 2 ? "75%" : "100%" }}
      ></div>
    </div>
    <div className="form-container">
      <div className="header">
        <h1 >{FormTitles[page]}</h1>
        <h1>Information</h1>

      </div>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
        <button className='button'
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
        className='button'
          onClick={async() => {
            setIsSubmit(true)
            console.log("is submit " +isSubmit )
            setFormErrors(validate());
            console.log("(Object.keys(formErrors).length : " +Object.keys(formErrors).length )
            if (page === FormTitles.length - 1 ) {
            //  alert("FORM SUBMITTED");
              console.log(formData);
              const [res , err ] = await queryApi('investors/newInvestor', formData , 'POST' , false );
              if(err){
                setErrors({
                    visbile: true,
                    message: JSON.stringify(err.errors,null,2)
                });
            }else history("/LoginInvestor");    
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
        
      </div>
      <Col>
  You have an account <Link to="/LoginInvestor">Login Here</Link>
  </Col>
    </div>
    
  </div>
  
  )
}




    export default MultiStep ; 
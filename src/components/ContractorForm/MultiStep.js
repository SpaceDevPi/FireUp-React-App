import React, { useState } from 'react';
import { Formik, Form } from "formik";
//import Header from './Header';
import { Col } from "react-bootstrap";
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormSuccess from './FormSuccess';
// import {FormStepThree} from './FormStepThree';
// import FormSuccess from './FormSuccess';
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import StepButton from './StepButton';
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import './multi.css';



function MultiStep(){
    

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        birthday: "",
        villenaissance: "",
        phone:"", 
        address: "",
        state: "",
        companyname: "",
        companyaddress: "",
        companyzip: "",
        companycity: "",
        codephone: "",
        companyphone: "",
        companyemail: "",
        companywebsite: "",
        companysector: "",
        companyservice: "",
        companysize: "",

    });
    const FormTitles = ["Personal Details ", "Company Details ", "Confirmation "];
    const [errors,setErrors] = useState({visbile:false,message:""});
    const {
        firstname, 
        lastname, 
        email, 
        password, 
        confirmPassword, 
        phone, 
        address, 
        city, 
        state, 
        zip, 
        companyName, 
        companyAddress, 
        companyZip, 
        companyCity,
        companyPhone,
        companyEmail,
        companyWebsite,
        companySector,
        companySize,
        companyService,
        birthday,
        villenaissance,

    } = formData; 

    const PageDisplay = () => {
        if (page === 0) {
        return <FormStepOne formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
        return <FormStepTwo formData={formData} setFormData={setFormData} /> ;
        }else {
        return <FormSuccess formData={formData} setFormData={setFormData} />;
        }
    };


    const navigate = useNavigate()




    const onSubmit = () => {
        

        if(password !== confirmPassword) {
        toast.error('Passwords do not match')
        }else if( firstname === "" || lastname === "" || email === "" || password === "" || confirmPassword === "" || phone === "" || address === "" || city === "" || state === "" || zip === "" || companyName === "" || companyAddress === "" || companyZip === "" || companyCity === "" || companyPhone === "" || companyEmail === "" || companyWebsite === "" || companySector === "" || companySize === "" || companyService === "" || birthday === "" || villenaissance === ""){
            toast.error('Please fill in all fields')
        }else {
        const entrepreneurData = {
            email,
            password,
            firstname,
            lastname,
            birthday,
            villenaissance,
            phone,
            address,
            city,
            state,
            zip,
            companyName,
            companyAddress, 
            companyZip, 
            companyCity,
            companyPhone,
            companyEmail,
            companyWebsite,
            companySector,
            companySize,
            companyService
        }
        console.log(entrepreneurData);
        axios.post('http://localhost:5000/api/entrepreneurs', entrepreneurData)
        .then(res => {
            console.log(res.data);
            navigate('/signInContractor');
        }).catch(err => {
            console.log(err);
            toast.error('Login Failed');
        });
        }
    }


    return (
        <div className="msform">
        
        <ul id="progressbar">
            <li className={page === 0 ? "active" : ""}> <strong> Personal Details </strong></li>
            <li className={page === 1 ? "active" : ""}> <strong> Company Details </strong></li>
            <li className={page === 2 ? "active" : ""}> <strong> Confirmation </strong></li>
        </ul>
        <div className="Progressbar">
            <div
                style={{ width: page === 0 ? "30%" : page === 1 ? "60%" : page === 2 ? "100%" : "100%" }}
            ></div>
        </div>
        <br/>
        <div className="Form-container">
        <div className="header">
            <h1 className="fs-title">{FormTitles[page]}</h1>
            <h1 className="steps">Step {page+1} - 3</h1>

        </div>
        <div className="body">
            {PageDisplay()}
        </div>
        <div className="footer">
            <button className='button'
            disabled={page === 0}
            onClick={() => {
                setPage((currPage) => currPage - 1);
                console.log(page);
            }}
            >
            Prev
            </button>
            <button
            className='button'
            onClick={async() => {
                if (page === 2) {
                //  alert("FORM SUBMITTED");
                
                onSubmit();
                } else {
                setPage((currPage) => currPage + 1);
                }
                console.log(page);
            }}
            >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
            
        </div>
        <Col>
            You have an account <Link to="/signInContractor">Login Here</Link>
        </Col>
        </div>
        
    </div>
    
    )
};

export default MultiStep;
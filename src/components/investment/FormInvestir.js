import React from 'react'; 
import  { useState } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sizeWidth } from '@mui/system';



export function FormInvestir () {
const ShowInvestement=async(e)=>{
    e.preventDefault(); 
    try {
        
        // setLoading(true); 
         
         localStorage.setItem('userInfo', JSON.stringify(formData))  
         console.log(formData)
        }
       
    catch (error) {
        //setError(error.response.data.message); 
        
    }
        
}
    const [formData, setFormData] = useState({
        idProject:"",
        idInvestisseur: "",
        monatantTotal: "",
        montantInvesti: "",
        dateInvestissement: "",
        dateFin:"", 
        MethodeInvestissement: ""
        
      });

  return (
    <div className="form-Login" >

    <div className="progressbar">
          <div
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="personal-info-container">
          
            <label><h1>Investir</h1></label>
        <Form className="personal-info-container"  >
        <label><h3>Monatant</h3> </label>
        
            <input type="number" min="0" max="100"  onChange={(e) => {
          setFormData({ ...formData, montantInvesti: e.target.value });
        }}/>
        <label><h3>Methode d'investissement</h3></label>
     
        <select value={formData.MethodeInvestissement} className='input'  onChange={(e) => {
          setFormData({ ...formData, MethodeInvestissement: e.target.value });
        }}>
        
    <option value="" >Options</option>
     <option value="donation" >donation</option>
    <option value="crowdlending ">crowdlending </option>
    <option value="crowdequity">crowdequity</option>
     </select>

     <div className='Gain'>
         You can win : {formData.montantInvesti *1.05} 

     </div>
 


      
      <Button  className="button" type="submit" onClick={ShowInvestement}>
        Submit
      </Button>
    </Form> 
    </div>
    
    </div>
    </div>
  )
}

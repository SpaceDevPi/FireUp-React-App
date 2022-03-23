import { radioClasses } from "@mui/material";
import React from "react";




function FormThirdStep({ formData, setFormData }) {
  function ShowAccreditForm() {
    var accreditForm = document.getElementById('accreditationform'); 
    if(formData.status=="0"){
      accreditForm.style.visibility ='visible' ; 
    }
    if(formData.status=="1" || formData.status== null ){
      accreditForm.style.visibility ='hidden' ; 
    }
    
  }
  return (
    <div className="other-info-container">

<select className="select input"  value={formData.accountType} onChange={(e) => {
          setFormData({ ...formData, accountType: e.target.value });
        }}>
     <option >account Type</option>
    <option value="Personnal">Personnal</option>
    <option value="Company">Company</option>
     </select>

     <select className="select input" value={formData.status}  onChange={(e) => {
          setFormData({ ...formData, status: e.target.value });
        }}>
     <option value="1" >Accreditation Status</option>
    <option value="0">Accredit Investor</option>
    <option value="1">Non Accredit Investor</option>
     </select>

    
<div onChange={(e) => {
          setFormData({ ...formData, accreditationForm: e.target.value });
        }}>
     <select value={formData.accreditationForm} id="accreditationform"       className="select input"
 onChange={ShowAccreditForm(this) } > 
    <option >Accreditation Form</option>
    <option value="1"> I invest on behalf of a trust with at least $5 million in assets </option>
    <option value="2">I have individual net worth, that exceeds $1 million</option>
    <option value="3">I had income exceeding $200,000 in each year</option>
    <option value="4">I have individual net worth $200,000 and I have sufficient knowledge to evaluate the merits and risks of startup investing.</option>

     </select>
     </div>

     

     
    </div>
  );
}

export default FormThirdStep;


// import React from "react";
// import { Field } from "formik";
// import TextField from "@material-ui/core/TextField";
// import { style } from "@mui/system";
// import { styled } from "@material-ui/core";

// export const FormThirdStep = formikProps => {
//   const { errors, touched } = formikProps;

//   return (
//     <>
//   <h3>Investement information</h3>

// <label className="AcreditStatus">Accrediation status </label>
    
//     <label>
//     Are you an accredited investir 
      
//       <label>
//       <Field
//         name="status"
//         value="1"
//         type= "radio"
//         margin="normal"

       
//       />
//       Oui
//       </label>
       
//        <label>
//        <Field
//         name="status"
//         value="0"
//         type= "radio"
//         margin="normal"

       
//       />
//       Non
//        </label>
//        </label>

//       <label>

//        <Field
//         name="accreditationform"
//         value="1"
//         type= "radio"
//         margin="normal"
//       />
//       I am an accredited investor because I had income exceeding $200,000, or income with my spouse (or spousal equivalent) exceeding $300,000, each of the past two years and expect the same this year.
//       </label>




//       <label>

//        <Field
//         name="accreditationform"
//         value="2"
//         type= "radio"
//         margin="normal"
//       />
//       I am an accredited investor because I have individual net worth, or joint net worth with my spouse (or spousal equivalent), that exceeds $1 million.
//       </label>

     
//       <label>

//        <Field
//         name="accreditationform"
//         value="3"
//         type= "radio"
//         margin="normal"
//       />
// I am an accredited investor because I invest on behalf of a trust with at least $5 million in assets and I have sufficient knowledge to evaluate the merits and risks of startup investing.      </label>

//       <label>

//        <Field
//         name="accreditationform"
//         value="4"
//         type= "radio"
//         margin="normal"
//       />
// I am an accredited investor because I currently hold one of the following FINRA administered licences: Series 7, Series 65, or Series 82.
//       </label>




//     <label>investment details </label>
//     <label> Account type
//     <label>
//       <Field
//         name="accountType"
//         value="personal "
//         type= "radio"
//         margin="normal"

       
//       />
//       Personal 
//       </label>
       
//        <label>
//        <Field
//         name="accountType"
//         value="Non"
//         type= "radio"
//         margin="normal"

       
//       />
//       Company 
//        </label>
//        </label>


       

    




    
//     </>
//   );
// };


// import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { Field } from "formik";;

// export const FormThirdStep = ({ formData, setForm, navigation,formikProps })  => {
//   const { errors, touched } = formikProps;
//   const { address, city, state, zip } = formData;

//   return (
    

// <Container maxWidth="xs">
//   <h3>Investement information</h3>

// <label className="AcreditStatus">Accrediation status </label>
    
//     <label>
//     Are you an accredited investir 
      
//       <label>
//       <Field
//         name="status"
//         value="1"
//         type= "radio"
//         margin="normal"

       
//       />
//       Oui
//       </label>
       
//        <label>
//        <Field
//         name="status"
//         value="0"
//         type= "radio"
//         margin="normal"

       
//       />
//       Non
//        </label>
//        </label>

//       <label>

//        <Field
//         name="accreditationform"
//         value="1"
//         type= "radio"
//         margin="normal"
//       />
//       I am an accredited investor because I had income exceeding $200,000, or income with my spouse (or spousal equivalent) exceeding $300,000, each of the past two years and expect the same this year.
//       </label>




//       <label>

//        <Field
//         name="accreditationform"
//         value="2"
//         type= "radio"
//         margin="normal"
//       />
//       I am an accredited investor because I have individual net worth, or joint net worth with my spouse (or spousal equivalent), that exceeds $1 million.
//       </label>

     
//       <label>

//        <Field
//         name="accreditationform"
//         value="3"
//         type= "radio"
//         margin="normal"
//       />
// I am an accredited investor because I invest on behalf of a trust with at least $5 million in assets and I have sufficient knowledge to evaluate the merits and risks of startup investing.      </label>

//       <label>

//        <Field
//         name="accreditationform"
//         value="4"
//         type= "radio"
//         margin="normal"
//       />
// I am an accredited investor because I currently hold one of the following FINRA administered licences: Series 7, Series 65, or Series 82.
//       </label>




//     <label>investment details </label>
//     <label> Account type
//     <label>
//       <Field
//         name="accountType"
//         value="personal "
//         type= "radio"
//         margin="normal"

       
//       />
//       Personal 
//       </label>
       
//        <label>
//        <Field
//         name="accountType"
//         value="Non"
//         type= "radio"
//         margin="normal"

       
//       />
//       Company 
//        </label>
//        </label>

//        <div style={{ marginTop: "1rem" }}>
//         <Button
//           color="secondary"
//           variant="contained"
//           style={{ marginRight: "1rem" }}
//           onClick={() => navigation.previous()}
//         >
//           Back
//         </Button>
//         <Button
//           color="primary"
//           variant="contained"
//           onClick={() => navigation.next()}
//         >
//           Next
//         </Button>
//       </div>
//     </Container>

       

    




    
    
//   );
// };
import React from 'react'; 
import  { useState } from "react";
import  FormFirstStep  from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep"; 
import  FormThirdStep  from "./FormThirdStep";
import FormFour from "./FormFour"; 
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sizeWidth } from '@mui/system';

 function MultiStep () {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    username:"",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber:"", 
    sexe: "",
    DateOfBirth : "",
    adress: "",
    status:"", 
    accreditationform:"",
    centerOfInterest :"" ,
    accountType :""
  });
  const FormTitles = ["Personal", "Professionnel ", "Investement" , "Center Of Interest"];

  const PageDisplay = () => {
    if (page === 0) {
      return <FormFirstStep formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <FormSecondStep formData={formData} setFormData={setFormData} />;
    }else if (page === 2) {
      return <FormThirdStep formData={formData} setFormData={setFormData} />
      ;
    } else {
      return <FormFour formData={formData} setFormData={setFormData} /> ;
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
        <button
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("FORM SUBMITTED");
              console.log(formData);
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



// import React, { useState } from "react";
// import { useForm } from "hooks/hooks";
// import { useStep } from "hooks/hooks";
// import { FormFirstStep } from "./FormFirstStep";
// import {FormSecondStep} from "./FormSecondStep"; 



// import { FormThirdStep } from "./FormThirdStep";
// import { Review } from "./Review";
// import { Submit } from "./Submit";

// const defaultData = {
  
//   username : "",
//   email : "", 
//   firstName :"",
//   lastName : "",
//   password : "", 
//   sexe : "", 
//   datOfBirth : "" , 
//   adress : "" , 
//   phoneNumber : "" ,
//   accreditationStatus : "" , 
//   centerOfInterest : "" ,  
//   image : ""

// }

// const steps = [
//   { id: "FormFirstStep" },
//   { id: "FormSecondStep" },
//   { id: "FormThirdStep" },
//   { id: "review" },
//   { id: "submit" },
// ];



// const MultiStep =() =>{
//   const [formData, setForm] = useForm(defaultData);
//   const { step, navigation } = useStep({
//     steps,
//     initialStep: 0,
//   });
//   const props = { formData, setForm, navigation };

//   switch (step.id) {
//     case "FormFirstStep":
//       return <FormFirstStep {...props} />;
//     case "FormSecondStep":
//       return <FormSecondStep {...props} />;
//     case "FormThirdStep":
//       return <FormThirdStep {...props} />;
//     case "review":
//       return <Review {...props} />;
//     case "submit":
//       return <Submit {...props} />;
//   }




// }

// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import { FormFirstStep } from "./FormFirstStep";
// import {FormSecondStep} from "./FormSecondStep"; 
// import { FormThirdStep } from "./FormThirdStep";
// import { StepButton } from "./StepButton";
// import { makeStyles } from "@material-ui/core/styles";
// import { FormSuccess } from "./FormSuccess";
// const useStyles = makeStyles(theme => ({
//     form: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center"
//     }
//   }));
  
//   const renderStep = (step, values, errors, touched) => {
//     switch (step) {
//       case 1:
//         return <FormFirstStep errors={errors} touched={touched} />;
//       case 2: 
//         return <FormSecondStep errors={errors} touched={touched} />;    
//       case 3:
//         return <FormThirdStep values={values} />;
//         case 4:
//             return <FormSuccess values={values} />;
//       default:
//         return <FormFirstStep errors={errors} touched={touched} />;
//     }
//   };
  
// const MultiStep = () => {
//     const [step, setStep] = useState(1);
//     const classes = useStyles();
//     const investor = {
//       username:"",
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       phoneNumber:"", 
//       sexe: "",
//       DateOfBirth : "",
//       adress: "",
//       status:"", 
//       accreditationform:"",
//       centerOfInterest :"" ,
//       accountType :""
//     };
//     const handleSubmit = () => setStep(step => step + 1);

  
//     const validate = values => {
//       const errors = {};
//       if (!values.username) {
//         errors.firstName = "Required";
//       }
//       if (!values.firstName) {
//         errors.firstName = "Required";
//       }
  
//       if (!values.lastName) {
//         errors.lastName = "Required";
//       }

//       if (!values.DateOfBirth) {
//         errors.DateOfBirth = "Required";
//       }
//       if (!values.email) {
//         errors.email = "Required";
//       }

//       if (!values.city) {
//         errors.city = "Required";
//       }
  

      
//       if (!values.state) {
//         errors.state = "Required";
//       }


//       return errors;
//     };
//     return (
//       <>
//         <Formik
//           enableReinitialize
//           initialValues={{ ...investor }}
//           onSubmit={handleSubmit}
//           validate={validate}
//         >
//           {({ values, errors, touched }) => (


//             <Form className={classes.form}>
//               {renderStep(step, values, errors, touched)}
//               <StepButton step={step} />


//             </Form>
//           )}
//         </Formik>
//       </>
//     );
//   };

    export default MultiStep ; 
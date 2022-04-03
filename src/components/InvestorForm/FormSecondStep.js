import { radioClasses } from "@mui/material";
import React from "react";
import styled from "styled-components";


function FormSecondStep ({ formData, setFormData , formErrors }) {
  return (
    <div className="sign-up-container">
      <input
      className="input"
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
            <FormErrors>{formErrors.email}</FormErrors>

      <input
            className="input"

        type="password"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
            <FormErrors>{formErrors.password}</FormErrors>

      <input
        type="text"
        className="input"

        placeholder="Phone Number..."
        value={formData.phoneNumber}
        onChange={(event) =>
          setFormData({ ...formData, phoneNumber: event.target.value })
        }
      />
            <FormErrors>{formErrors.phoneNumber}</FormErrors>

      <input
        type="text"
        className="input"

        placeholder="Adress..."
        value={formData.adress}
        onChange={(event) =>
          setFormData({ ...formData, adress: event.target.value })
        }
      />
            <FormErrors>{formErrors.adress}</FormErrors>

    </div>
  );
}

export default FormSecondStep;

const FormErrors= styled.div`
color : #f74b1b;
`;


// import React from "react";
// import { Field } from "formik";
// import TextField from "@material-ui/core/TextField";
// import { style } from "@mui/system";
// import { styled } from "@material-ui/core";

// export const FormSecondStep = formikProps => {
//   const { errors, touched } = formikProps;

//   return (
//     <>
//       <h3>Personal information</h3>
//   <Field
//   type="email"
//   name="email"
//   label="Email Address"
//   margin="normal"
//   as={TextField}
//   error={touched.email && errors.email}
//   helperText={touched.email && errors.email}
// />

// <Field
// type="password"
// name="Password"
// label="Password"
// margin="normal"
// as={TextField}

// />

// <Field
// type="password"
// name="ConfirmPassword"
// label="Confirm Password"
// margin="normal"
// as={TextField}


// />




// <Field name="adress" label="adress" as={TextField} 
// error={touched.adress && errors.adress}
// helperText={touched.adress && errors.adress}
// />



      
//     </>
//   );
// };



// import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { Field } from "formik";


// export const FormSecondStep  = ({ formData, setForm, navigation,formikProps }) => {
//   const { errors, touched } = formikProps;
//   const { email, password, ConfirmPassword, adress } = formData;

  
//   <Container maxWidth="xs">
//   <h3>Personal information</h3>
//   <Field
//   type="email"
//   name="email"
//   label="Email Address"
//   margin="normal"
//   as={TextField}
//   error={touched.email && errors.email}
//   helperText={touched.email && errors.email}
// />

// <Field
// type="password"
// name="Password"
// label="Password"
// margin="normal"
// as={TextField}

// />

// <Field
// type="password"
// name="ConfirmPassword"
// label="Confirm Password"
// margin="normal"
// as={TextField}


// />




// <Field name="adress" label="adress" as={TextField} 
// error={touched.adress && errors.adress}
// helperText={touched.adress && errors.adress}
// />


// <div style={{ marginTop: "1rem" }}>
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

// }


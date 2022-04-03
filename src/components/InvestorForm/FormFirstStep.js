import { radioClasses } from "@mui/material";
import React from "react";
import styled from "styled-components";

function FormFirstStep({ formData, setFormData,formErrors }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        className="input"

        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <FormErrors>{formErrors.username}</FormErrors>
      <input
        className="input"
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
            <FormErrors>{formErrors.firstName}</FormErrors>

      <input
        type="text"
        className="input"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
            <FormErrors>{formErrors.lastName}</FormErrors>

      <label>Gender</label>
      <div>
        <input type="radio" value="Male" name="formData.sexe" onChange={(e) => {
          setFormData({ ...formData, sexe: e.target.value });
        }} /> Male
        <input type="radio" value="Female" name="formData.sexe" onChange={(e) => {
          setFormData({ ...formData, sexe: e.target.value });
        }} /> Female
        
      </div>
      <FormErrors>{formErrors.sexe}</FormErrors>

      <input type="date" date='yyyy-dd-MM'         className="input"
  onChange={(e) => {
          setFormData({ ...formData, datOfBirth: e.target.value });
        }} />
              <FormErrors>{formErrors.datOfBirth}</FormErrors>

    </div>
    
  );
}


export default FormFirstStep;


const FormErrors= styled.div`
color : #f74b1b;
`;

// import React from "react";
// import { Field } from "formik";
// import TextField from "@material-ui/core/TextField";

// export const FormFirstStep = formikProps => {
//   const { errors, touched } = formikProps;


  
//   return (
//     <>


//   {/* <Field
//     label="User Name"
//     name="username"
//     as={TextField}
//         error={touched.firstName && errors.firstName}
//         helperText={touched.firstName && errors.firstName}
//         margin="normal"
//   />
//       <Field
//         name="firstName"
//         label="First Name"
//         as={TextField}
//         error={touched.firstName && errors.firstName}
//         helperText={touched.firstName && errors.firstName}
//         margin="normal"

//       />


//       <Field
//         name="lastName"
//         label="Last Name"
//         as={TextField}
//         error={touched.lastName && errors.lastName}
//         helperText={touched.lastName && errors.lastName}
//         margin="normal"

//       />
//       <label>Gender
//       <label>
//       <Field
//         margin="normal"

//         name="gender"
//         value="male"
//         type= "Radio"
//         Label="Male"

      
//       />
//       male</label>
//       <label>
//        <Field
//         name="gender"
//         value="Female"
//         type= "Radio"
//         margin="normal"
//         Label="Female"


       
//       />
//       Female
//       </label>
      
//       </label>

//        <Field
//        name = "DateOfBirth"
//         type="date"
//         error={touched.lastName && errors.lastName}
//         helperText={touched.lastName && errors.lastName}
//         as={TextField}
//         margin="normal"

//       />
//  */}

//     </>
//   );
// };

// import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { Field } from "formik";


// export const FormFirstStep =  ({ formData, setForm, navigation,formikProps }) => {
//   const {username, firstName, lastName, Gender, DateOfBirth } = formData;
//   const { errors, touched } = formikProps;

//   <Container maxWidth="xs">
//   <h3>Personal information</h3>
  // <TextField
  //   label="User Name"
  //   name="userName"
  //   value={username}
  //   onChange={setForm}
  //   margin="normal"
  //   variant="outlined"
  //   autoComplete="off"
  //   fullWidth
  // />
//   <TextField
//     label="First Name"
//     name="firstName"
//     value={firstName}
//     onChange={setForm}
//     margin="normal"
//     variant="outlined"
//     autoComplete="off"
//     fullWidth
//   />
//   <TextField
//     label="Last Name"
//     name="lastName"
//     value={lastName}
//     onChange={setForm}
//     margin="normal"
//     variant="outlined"
//     autoComplete="off"
//     fullWidth
//   />

// <label>Gender
//     <label>
//        <Field
//          margin="normal"

//          name="gender"
//          value="male"
//          type= "Radio"
//          Label="Male"

      
//        />
//        male</label>
//        <label>
//         <Field
//          name="gender"
//          value="Female"
//          type= "Radio"
//          margin="normal"
//          Label="Female"


       
//        />
//        Female
//        </label>
      
//        </label>

//        <Field
//        name = "DateOfBirth"
//         type="date"
//         error={touched.lastName && errors.lastName}
//         helperText={touched.lastName && errors.lastName}
//         as={TextField}
//         margin="normal"

//       />


//   <Button
//     variant="contained"
//     fullWidth
//     color="primary"
//     style={{ marginTop: "1rem" }}
//     onClick={() => navigation.next()}
//   >
//     Next
//   </Button>
// </Container>
// }
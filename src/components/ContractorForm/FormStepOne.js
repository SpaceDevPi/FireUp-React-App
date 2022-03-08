import React from 'react';
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const FormStepOne = formikProps => {
    const { errors, touched } = formikProps;

    return (
        <>
            <Field 
                name="firstName"
                label="First Name *"
                as = {TextField}
                error = {touched.firstName && errors.firstName}
                helperText = {touched.firstName && errors.firstName}
            />
            <Field
                name="lastName"
                label="Last Name *"
                as = {TextField}
                error = {touched.lastName && errors.lastName}
                helperText = {touched.lastName && errors.lastName}
            />
            <Field
                name="email"
                label="Email *"
                as = {TextField}
                error = {touched.email && errors.email}
                helperText = {touched.email && errors.email}
            />
            <Field
                name="phone"
                label="Phone number *"
                as = {TextField}
                error = {touched.phone && errors.phone}
                helperText = {touched.phone && errors.phone}
            />
            <Field
                name="adresse"
                label="Adresse *"
                as = {TextField}
                error = {touched.adresse && errors.adresse}
                helperText = {touched.adresse && errors.adresse}
            />
            <Field
                name="city"
                label="City *"
                as = {TextField}
                error = {touched.city && errors.city}
                helperText = {touched.city && errors.city}
            />
            <Field
                name="state"
                label="State *"
                as = {TextField}
                error = {touched.state && errors.state}
                helperText = {touched.state && errors.state}
            />
            <Field
                name="zip"
                label="Zip *"
                as = {TextField}
                error = {touched.zip && errors.zip}
                helperText = {touched.zip && errors.zip}
            />
            
            <Field
                name="country"
                label="Country *"
                as = {TextField}
                error = {touched.country && errors.country}
                helperText = {touched.country && errors.country}
            />
            
        
        </>
    )
};



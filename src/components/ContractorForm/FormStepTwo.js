import React from 'react';
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const FormStepTwo = formikProps => {
    const { errors, touched } = formikProps;

    return (
        <>
            <Field
                name="company"
                label="Company Name *"
                as = {TextField}
                error = {touched.company && errors.company}
                helperText = {touched.company && errors.company}
            />
            <Field
                name="companyEmail"
                label="Company Email *"
                as = {TextField}
                error = {touched.companyEmail && errors.companyEmail}
                helperText = {touched.companyEmail && errors.companyEmail}
            />
            <Field
                name="companyPhone"
                label="Company Phone *"
                as = {TextField}
                error = {touched.companyPhone && errors.companyPhone}
                helperText = {touched.companyPhone && errors.companyPhone}
            />
            <Field
                name="companyAdresse"
                label="Company Adresse *"
                as = {TextField}
                error = {touched.companyAdresse && errors.companyAdresse}
                helperText = {touched.companyAdresse && errors.companyAdresse}
            />
            <Field
                name="companyCity"
                label="Company City *"
                as = {TextField}
                error = {touched.companyCity && errors.companyCity}
                helperText = {touched.companyCity && errors.companyCity}
            />
            <Field
                name="companyState"
                label="Company State *"
                as = {TextField}
                error = {touched.companyState && errors.companyState}
                helperText = {touched.companyState && errors.companyState}
            />
            <Field
                name="companyZip"
                label="Company Zip *"
                as = {TextField}
                error = {touched.companyZip && errors.companyZip}
                helperText = {touched.companyZip && errors.companyZip}
            />
            <Field
                name="companyWebsite"
                label="Company Website *"
                as = {TextField}
                error = {touched.companyWebsite && errors.companyWebsite}
                helperText = {touched.companyWebsite && errors.companyWebsite}
            />
            
        </>
    )
};


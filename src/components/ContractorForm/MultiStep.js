import React, { useState } from 'react';
import { Formik, Form } from "formik";
//import Header from './Header';
import { makeStyles } from "@material-ui/core/styles";
import {FormStepOne} from './FormStepOne';
import {FormStepTwo} from './FormStepTwo';
import {FormStepThree} from './FormStepThree';
import FormSuccess from './FormSuccess';
import StepButton from './StepButton';


const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const renderStep = (step, values, errors, touched) => {

    switch (step) {
        case 1:
            return <FormStepOne errors={errors} touched={touched} />;
        case 2:
            return <FormStepTwo errors={errors} touched={touched} />;
        case 3:
            return <FormStepThree errors={errors} touched={touched} />;
        case 4:
            return <FormSuccess values={values}/>;
        default:
            return <FormStepOne errors={errors} touched={touched} />;
    }
};

const MultiStep = () => {
    const [step, setStep] = useState(1);
    const classes = useStyles();
    const formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        adresse: "",
        city: "",
        zip: "",
        country: "",
        state: "",
        company: "",
        companyEmail: "",
        companyPhone: "",
        companyAdresse: "",
        companyCity: "",
        companyZip: "",
        companyCountry: "",
        companyState: "",
        companyRegion: "",
        companyType: "",
        companySize: "",
        companyDescription: "",
        companyWebsiteUrl: "",
        companyLegalDocument: "",
        companyProofOfAddress: ""
    };

    const handleNext = () => setStep(step => step + 1);

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "Required";
        }
        if (!values.lastName) {
            errors.lastName = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.phone) {
            errors.phone = "Required";
        }
        if (!values.adresse) {
            errors.adresse = "Required";
        }
        if (!values.city) {
            errors.city = "Required";
        }
        if (!values.zip) {
            errors.zip = "Required";
        }
        if (!values.country) {
            errors.country = "Required";
        }
        if (!values.state) {
            errors.state = "Required";
        }
        if (!values.company) {
            errors.company = "Required";
        }
        if (!values.companyEmail) {
            errors.companyEmail = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.companyEmail)) {
            errors.companyEmail = "Invalid email address";
        }
        if (!values.companyPhone) {
            errors.companyPhone = "Required";
        }
        if (!values.companyAdresse) {
            errors.companyAdresse = "Required";
        }
        if (!values.companyCity) {
            errors.companyCity = "Required";
        }
        if (!values.companyZip) {
            errors.companyZip = "Required";
        }
        if (!values.companyCountry) {
            errors.companyCountry = "Required";
        }
        if (!values.companyState) {
            errors.companyState = "Required";
        }
        if (!values.companyRegion) {
            errors.companyRegion = "Required";
        }
        if (!values.companyType) {
            errors.companyType = "Required";
        }
        if (!values.companySize) {
            errors.companySize = "Required";
        }
        if (!values.companyDescription) {
            errors.companyDescription = "Required";
        }
        if (!values.companyWebsiteUrl) {
            errors.companyWebsiteUrl = "Required";
        }
        

        return errors;
    };

  return (
    <>
        {/* <Header title="Finding Investors" /> */}
        <Formik 
            enableReinitialize
            initialValues={{ ...formData }}
            onSubmit={handleNext}
            validate={validate}
        >
            {({ values, errors, touched }) => (
                <Form className={classes.form}>
                    {renderStep(step, values, errors, touched)}
                    <StepButton step={step} />
                </Form>
            )}
        </Formik>
    </>
  );
};

export default MultiStep;
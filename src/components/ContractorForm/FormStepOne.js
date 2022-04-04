import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'


function FormStepOne({ formData, setFormData }) {
  return (
    <div className="Personal-info-container">
        
        <input
            type="text"
            className="input"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            }}
        />
        <input
            type="password"
            className="input"
            placeholder="Password..."
            value={formData.password}
            onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
            }}
        />
        <input
            type="password"
            className="input"
            placeholder="Confirm Password..."
            value={formData.confirmPassword}
            onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
            }}
        />
        <input
                className="input"
                type="text"
                placeholder="First Name..."
                value={formData.firstname}
                onChange={(e) => {
                setFormData({ ...formData, firstname: e.target.value });
                }}
            />
            <input
                type="text"
                className="input"
                placeholder="Last Name..."
                value={formData.lastname}
                onChange={(e) => {
                setFormData({ ...formData, lastname: e.target.value });
                }}
            />
            <DatePicker 
                className="input"
                placeholderText="Date of Birth"
                selected={formData.birthday}
                onChange={(date) => {
                setFormData({ ...formData, birthday: date });
                }}
            />
            <input
                type="text"
                className="input"
                placeholder="Birthplace"
                value={formData.villenaissance}
                onChange={(e) => {
                setFormData({ ...formData, villenaissance: e.target.value });
                }}
            />

            
            <PhoneInput
                
                country={'tn'}
                value={formData.phone}
                onChange={(e) => {
                    setFormData({ ...formData, phone: e });
                }}
            />

            <input
                type="text"
                className="input"
                placeholder="Address..."
                value={formData.address}
                onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
                }}
            />
            <input
                type="text"
                className="input"
                placeholder="City..."
                value={formData.city}
                onChange={(e) => {
                setFormData({ ...formData, city: e.target.value });
                }}
            />
            <input
                type="text"
                className="input"
                placeholder="state..."
                value={formData.state}
                onChange={(e) => {
                setFormData({ ...formData, state: e.target.value });
                }}
            />
            <input
                type="text"
                className="input"
                placeholder="Zip Code..."
                value={formData.zip}
                onChange={(e) => {
                setFormData({ ...formData, zip: e.target.value });
                }}
            />
    </div>
  );
};

export default FormStepOne;

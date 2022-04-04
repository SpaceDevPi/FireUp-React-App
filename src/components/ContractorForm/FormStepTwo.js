import { handleBreakpoints } from '@mui/system';
import React, { useMemo } from 'react';
import Select from 'react-select'


const options = [
    { value: 'Art ', label: 'Art ' },
    { value: 'Education ', label: 'Education ' },
    { value: 'Finance ', label: 'Finance ' },
    { value: 'Food ', label: 'Food ' },
    { value: 'Health ', label: 'Health ' },
    { value: 'Hospitality ', label: 'Hospitality ' },
    { value: 'Manufacturing ', label: 'Manufacturing ' },
    { value: 'Media ', label: 'Media ' },
    { value: 'Retail ', label: 'Retail ' },
    { value: 'Technology ', label: 'Technology ' },
    { value: 'Transportation ', label: 'Transportation ' },
    { value: 'Other ', label: 'Other ' },
];




function FormStepTwo({ formData, setFormData }) {
    
    return (
        <div className="Personal-info-container">
            <input
                type="text"
                className="input"
                placeholder="Company Name..."
                value={formData.companyName}
                onChange={(e) => {
                setFormData({ ...formData, companyName: e.target.value });
                }}
            />

            <input
                type="text"
                className="input"
                placeholder="Company Address..."
                value={formData.companyAddress}
                onChange={(e) => {
                setFormData({ ...formData, companyAddress: e.target.value });
                }}
            />

            <input
                type="text"
                className="input"
                placeholder="Company city..."
                value={formData.companyCity}
                onChange={(e) => {
                setFormData({ ...formData, companyCity: e.target.value });
                }}
            />
            
            <input
                type="text"
                className="input"
                placeholder="Company Zip..."
                value={formData.companyZip}
                onChange={(e) => {
                setFormData({ ...formData, companyZip: e.target.value });
                }}
            />

            

            <input
                type="text"
                className="input"
                placeholder="Company Phone..."
                value={formData.companyPhone}
                onChange={(e) => {
                setFormData({ ...formData, companyPhone: e.target.value });
                }}
            />

            <input
                type="text"
                className="input"
                placeholder="Company Website..."
                value={formData.companyWebsite}
                onChange={(e) => {
                setFormData({ ...formData, companyWebsite: e.target.value });
                }}
            />

            <input
                type="text"
                className="input"
                placeholder="Company Email..."
                value={formData.companyEmail}
                onChange={(e) => {
                setFormData({ ...formData, companyEmail: e.target.value });
                }}
            />
            <input
                type="text"
                className="input"
                placeholder="Company sector..."
                value={formData.companySector}
                onChange={(e) => {
                setFormData({ ...formData, companySector: e.target.value });
                }}
            />
{/* 
            <Select 
                className="input"
                placeholder="Company Activity sector..."
                options={options}
                onChange={(e) => {
                setFormData({ ...formData, companySector: e.target.value });
                }}
            /> */}

            <input
                type="text"
                className="input"
                placeholder="Company Service..."
                value={formData.companyService}
                onChange={(e) => {
                setFormData({ ...formData, companyService: e.target.value });
                }}
            />

            <input
                type="text"
                className="input"
                placeholder="Company Size..."
                value={formData.companySize}
                onChange={(e) => {
                setFormData({ ...formData, companySize: e.target.value });
                }}
            />


        </div>
    );
};

export default FormStepTwo;


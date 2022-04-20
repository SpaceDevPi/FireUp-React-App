import React from 'react'
import styled from "styled-components";
import  { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sizeWidth } from '@mui/system';
import { queryApi } from "../../utils/queryApi";
import { useApi } from "../../hooks/useApi";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function InvestementForm ()  {
  const { investor } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [project,err,reload] = useApi('project/project/'+id);
  if( project != null)
  {

const title = project.title;
  }


      const notify = () => toast("thanks For Your Investement!");


  
const ShowInvestement=async(e)=>{
  e.preventDefault(); 
  try {
      
      // setLoading(true); 
       
       localStorage.setItem('userInfo', JSON.stringify(formData))  
     //  console.log(formData)
      const [res , err ] = await queryApi('investement/newInvestment', formData , 'POST' , false );
      // alert("check your mail");
      toast.success("thanks for your investment")

      }
     
  catch (error) {
      //setError(error.response.data.message); 
      
  }

      
}
const [formProject, setFormProject] = useState({
  title:"", 
  montantTotal : "",
  montantRestant : "", 
  imageProject : ""
});

  const [formData, setFormData] = useState({
      idProject:"",
      idInvestisseur: "",
      monatantTotal: "",
      montantInvesti: "",
      dateInvestissement: "",
      dateFin:"", 
      MethodeInvestissement: "",
      
    });
    if( project != null){

    formData.dateFin=project.end_date; 
    formData.monatantTotal=project.amount_to_collect; 
    formData.idInvestisseur=investor._id; 
    formData.idProject= project._id; 
    formProject.title= project.title ;
    formProject.monatantTotal=project.amount_to_collect; 
    if(project.montantRestant == -1){
      formProject.montantRestant= project.amount_to_collect; 
    }
    else{formProject.montantRestant = project.montantRestant;}
    

    }
    if(formProject.monatantRestant==-1) {
      formProject.monatantRest= formProject.monatantTotal

    }
  //  console.log(formData);
    
const Investement = ()=>{
if(document.getElementById('InvestementForm') != null){
const investement_Form = document.getElementById('InvestementForm').value;
if (investement_Form=="crowdlending"){
  return `Thanks for your investement you will be able to receive ${formData.montantInvesti *1.05}$ after 2 years`
}
if (investement_Form=="crowdequity"){
  return `Thanks for your investement you have ${(formData.montantInvesti / formData.monatantTotal)*100}% of the profit`

}  if (investement_Form=="donation"){

  return 'thanks for your donation 🙏! '
}}



}



  return (
    <Container>
            
    {/* <img src={`http://localhost:5000/uploads/${formProject.imageProject}`}/>      */}
    <img src='/project.png' className="imageProject"/>

    <div class="MultiStep">
    <div className="form-Login" >

<div className="progressbar">
      <div
        style={{ width: "100%" }}
      ></div>
    </div>
    <div className="FormINvestementCOntainer">
      <div className="personal-info-container">
      
        <label><h1>Investir</h1></label>
        <div>
     <h3>Project Title : {formProject.title}</h3> 
     <h3>Total amount  : {formProject.monatantTotal} </h3>
     <h3>Remaining amount : {formProject.montantRestant - formData.montantInvesti} </h3>
     <h3>End Of Investement : {new Date (formData.dateFin).toLocaleDateString()} </h3>
     </div>
    <Form className="personal-info-container"  >
      <div className='personal-info-container'>
    <label><h3>Monatant</h3> </label>

        <input type="number" min="0" max= {formProject.montantRestant} className='input' onChange={(e) => {
      setFormData({ ...formData, montantInvesti: e.target.value });
    }}/>
    <label><h3>Methode d'investissement</h3></label>
 
    <select className="select input" value={formData.MethodeInvestissement} id="InvestementForm"   onChange={(e) => {
      setFormData({ ...formData, MethodeInvestissement: e.target.value });
    }}>
    
<option value="" >Options</option>
 <option value="donation" >donation</option>
<option value="crowdlending">crowdlending </option>
<option value="crowdequity">crowdequity</option>
 </select>

 <div className='Gain' >
    <div>{Investement()}</div>

 </div>



  
  <button  className="button" type="submit" onClick={ShowInvestement}>
    Submit
  </button>
  </div>
</Form> 

</div>

</div>
</div>

    </div>
</Container>
  )
}


const Container = styled.div`
  padding: 0px;
  display :flex ; 
  flexDirection : column ; 

  img {
    /* z-index: -1; */
    width: 40% ;
    height: 75%;
    position: absolute;
    margin-left : 5%; 
   
    }
  }
  .MultiStep{
    display: flex;
    margin-left : 60% ; 
    width  : 30% ; 
    height  : 75%; 

  }


`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content:end ;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #f26716;
  color: #f26716;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(242,103,22,0.3);
    color: #f26716;
    text-decoration: none;
  }
`;



export default InvestementForm;

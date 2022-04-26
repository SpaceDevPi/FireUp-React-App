import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import  Loader  from "./Loader";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import  { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { queryApi } from "../../utils/queryApi";
import { useApi } from "../../hooks/useApi";


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="inputEther"
    />
  );
const Welcome = () => {
    const { id } = useParams();
   // console.log(id)
   const [project,err,reload] = useApi('project/project/'+id);
   
  const notify = () => toast("thanks For Your Investement!");

  const { investor } = useSelector((state) => state.auth);

  const [formDataProject, setformDataProject] = useState({
    idProject:"",
    idInvestisseur: "",
    monatantTotal: "",
    montantInvesti: "",
    dateInvestissement: "",
    dateFin:"", 
    MethodeInvestissement: "",
    
  });
  const [formInvestement , setformInvestement] = useState ({
    idProject:"",
    idInvestisseur: "",
    monatantTotal: "",
    montantInvesti: "",
    dateInvestissement: "",
    dateFin:"", 
    MethodeInvestissement: "",
  })
  const [formInvestinfo  , setformInvestinfo] = useState({
    montantRestant:""
  })
 
  if( project != null)
  {


    formDataProject.title = project.title;
    formDataProject.dateFin=project.end_date; 
    formDataProject.monatantTotal=project.amount_to_collect; 
    formDataProject.idInvestisseur=investor._id; 
    formDataProject.idProject= project._id; 
    if(project.montantRestant == -1){
        formInvestinfo.montantRestant= project.amount_to_collect; 
      }
      else{formInvestinfo.montantRestant = project.montantRestant;}
      
  }

    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading , Balance} = useContext(TransactionContext);
   
    if ( project != null ){
        
    formInvestement.idInvestisseur=investor._id; 
    formInvestement.idProject= project._id; 
    formInvestement.monatantTotal=project.amount_to_collect; 
    formInvestement.montantInvesti= formData.amount * 3096; 
    formInvestement.dateFin=project.end_date; 
    }
    console.log(formInvestement)

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
    
        e.preventDefault();
    
        if (!addressTo || !amount || !keyword || !message) return;
    
        sendTransaction();
        const [res , err ] = queryApi('investement/newInvestment', formInvestement , 'POST' , false );
        // alert("check your mail");
        toast.success("thanks for your investment")
      };

  return (
    <div className="WelcomeBlock1">
         {!currentAccount && (
            <button
              type="button"
               onClick={connectWallet}
              className="buttonConnect"
            >
              <AiFillPlayCircle  />
              <p >
                Connect Wallet
              </p>
            </button>
          )} 
          <div className="infoInvestement">
          <h1>Investement Infomations : </h1>
        
     <h3>Project Title : {formDataProject.title}</h3> 
     <h3>Total amount  : {formDataProject.monatantTotal} </h3>
     <h3>Remaining amount : {formInvestinfo.montantRestant -  formData.amount * 3096} </h3>
     <h3>End Of Investement : {new Date (formDataProject.dateFin).toLocaleDateString()} </h3>
   
          </div>
     <div className="firstEtherCompo">
        <div className="CompteBlock">
        <div className="eth-card ">
            <div >
              <div >
                <div >
                </div>
                <BsInfoCircle fontSize={25} color="#fff" className="infoether"/>
              </div>
              <div>
               
                <p className="text-ether">
                <SiEthereum fontSize={25} color="#fff" />
                Ethereum <br/>
                {shortenAddress(currentAccount)}
                <br/>
                Balance : {Balance} ETH
                
                </p>
              </div>
            </div>
          </div>
          
        </div>
       
        <div className="ContainerFormEther">
            
        <div >
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input value={formDataProject.title} name="message" type="text" handleChange={handleChange} />
            <select className="select inputEther" value={formInvestement.MethodeInvestissement} id="InvestementForm"   onChange={(e) => {
      setformInvestement({ ...formInvestement, MethodeInvestissement: e.target.value });
    }}>
    
<option value="" >Options</option>
 <option value="donation" >donation</option>
<option value="crowdlending">crowdlending </option>
<option value="crowdequity">crowdequity</option>
 </select>

            <div  />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="buttonEther"
                >
                  Send now
                </button>
              )}
          </div>
          </div>
          <div className="CompteBlock2">
              <div>
                <div className="serviceEther">
                
                <h1><BsShieldFillCheck fontSize={21} />Security gurantee</h1>
                </div>
                <div className="serviceEther">
                
                <h1><AiFillLike fontSize={21}  />Best exchange rates</h1>
                </div>
                <div className="serviceEther">
                
                <h1><AiFillThunderbolt fontSize={21}  />Fastest transactions</h1>
                </div>
                </div>
            </div>
          </div>

    </div>
  )
}
export default Welcome ; 

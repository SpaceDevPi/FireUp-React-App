import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from './Navbar';
import Link from 'react-scroll/modules/components/Link';
import { NavLink } from 'react-router-dom';
import ProjectDashbord from  "../Projects/ProjectDashbord";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useApi} from '../../hooks/useApi'
import {queryApi} from '../../utils/queryApi'
import { TransactionContext } from "../../Blockchain/context/TransactionContext";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from "../../Blockchain/utils/shortenAddress";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import Projects from '../../components/Projects/Projects'

export default function MainContent  () {

  function status() {
       
    if (toRender.status ==0){
        return "Accredit Investor"; 
    }if (toRender.status ==1) {
      return "Non Accredit Investor";
    }

}
function AccreditationForm() {
 
if (toRender.accreditationForm ==1){
return "I invest on behalf of a trust with at least $5 million in assets."; 
}if (toRender.accreditationForm ==2){
return "I have individual net worth, that exceeds $1 million."; 
}if (toRender.accreditationForm ==3){
return "I had income exceeding $200,000 in each year."; 
}if(toRender.accreditationForm ==4) {
return "I have individual net worth $200,000 and I have sufficient knowledge to evaluate the merits and risks of startup investing..";
}

}



  const navigate = useNavigate();
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading , Balance} = useContext(TransactionContext);

  const { investor } = useSelector((state) => state.auth);
  const [toRender,err,reload] = useApi('investors/investorId/'+investor._id);
  const [errors, setErrors] = useState({ visbile: false, message: "" });


  const [projects,errr,reloadd] = useApi('investement/getInvestmentsByInvestor/'+investor._id );
  const deleteProject= async (id)=>{
      // const[,err] = await queryApi('project/'+id,{},'DELETE',false);
      if(errr){
          console.log(errr);
      } else await reloadd();
  }
  const [Skip, setSkip] = useState(0)

  

  return (
    <>
      { toRender ? (
    <>


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
                My Account
                <br/>
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

          <div class="col-md-4  float-right m-3 ">
                  <div class="card5 profile-card-5 profile ">
                    
                    <div class="card-body pt-5">
                      <img
                         src={`${process.env.REACT_APP_API_URL_UPLOADS + '/' + toRender.image}`}  
                        alt="profile-image"
                        class="profile"
                      />
                      <h5 class="card-title text-center">{toRender.firstName} {toRender.lastName}</h5>
                     
                      <div class="icon-block text-center">
                      <p class="mt-3 w-100 float-left text-center buttons">
                        <button class="btn-view" onClick={() => {navigate("/profileInvestor")}}>view profile</button>
                      </p>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div className="CompteBlock3">
              <div>
                <h3>Account informations</h3>
                <div> <span className="userShowInfoTitle"><h2><AccountBoxOutlinedIcon />Your Account type : <span className="userShowInfoTitle">{toRender.accountType}</span></h2></span></div>
                <div className="userShowInfoTitle"> <h2><PrivacyTipOutlinedIcon className="userShowIcon"/>Your status : <span className="userShowInfoTitle">{status()}</span></h2></div>       

               
                </div>
            </div>

           

          
    {/* <Container>
        <Navbar />
        <div className='informationdashbord'>
          <div className="userShowInfo">
       <AccountBoxOutlinedIcon className="userShowIcon"/> <span className="userShowInfoTitle"><p>Your Account type : <span className="userShowInfoTitle">{toRender.accountType}</span></p></span>
       </div>
       <div className="userShowInfo">

       <PrivacyTipOutlinedIcon className="userShowIcon"/> <div className="userShowInfoTitle"><p>Your status : <span className="userShowInfoTitle">{status()}</span></p></div>       
        </div>
        </div>
    </Container>

    <SubContainer>
          <ProjectContainer>
          <span className ="userShowUserTitle">My Projects : </span>
          <Project>
          {
          projects ? projects.map((project, index) => (
                <ProjectDashbord deleteProject={deleteProject} project={project}
                    key={index}></ProjectDashbord>
            )): <h1>Products not found</h1>
        } 
          </Project>
            
          </ProjectContainer>


     <Container>
      
    <span className ="userShowUserTitle">My Projects : </span>
    <NavLink to='/projectsInvestor'>
      <div>
            <FilterContainer>
              <Filter>
        <CheckBox  list={category}
                        handleFilters={filters => handleFilters(filters, "category")}/>

        </Filter>
        </FilterContainer>
        <Containerr> 
          {
          projects ? projects.map((project, index) => (
                <ProjectDashbord deleteProject={deleteProject} project={project}
                    key={index}></ProjectDashbord>
            )): <h1>Products not found</h1>
        } 
        </Containerr>
      </div>


    <button className='button dashbordBotton' > My Projects </button>

    </NavLink>
    </Container>
    <Container>
    <span className ="userShowUserTitle">Liste of Events : </span>
    <NavLink to='/Events'>
    <button className='button dashbordBotton' > Events </button>
    </NavLink>
    </Container>
    <Container>
    <span className ="userShowUserTitle">Liste of Coachs : </span>
    <NavLink to='/Coachs'>
    <button className='button dashbordBotton' > Coachs </button>
    </NavLink>
    </Container>
    <Container>

    </Container> 
    </SubContainer> */}
</>
) : (<p></p>) }

</>
  )
}

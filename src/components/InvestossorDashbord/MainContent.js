import React from 'react';
import styled from "styled-components";
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import WelcomeWidget from './widgets/WelcomeWidget';
import AchievementWidget from './widgets/AchibvementWidget';
import Link from 'react-scroll/modules/components/Link';
import { NavLink } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useApi} from '../../hooks/useApi'
import {queryApi} from '../../utils/queryApi'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';


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

  const { investor } = useSelector((state) => state.auth);
  const [toRender,err,reload] = useApi('investors/investorId/'+investor._id);
  const [errors, setErrors] = useState({ visbile: false, message: "" });

  

  return (
    <>
      { toRender ? (
    <>
    <Container>
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
    <Container>
    <span className ="userShowUserTitle">My Projects : </span>
    <NavLink to='/projectsInvestor'>
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
    </SubContainer>
</>
) : (<p></p>) }

</>
  )
}

const Container = styled.div`
  width: 90%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 3rem 1rem 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 5rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;


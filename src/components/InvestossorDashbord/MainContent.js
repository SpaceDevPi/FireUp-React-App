import React from 'react';
import styled from "styled-components";
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import WelcomeWidget from './widgets/WelcomeWidget';
import AchievementWidget from './widgets/AchibvementWidget';
import Link from 'react-scroll/modules/components/Link';
import { NavLink } from 'react-router-dom';
import ProjectDashbord from  "../Projects/ProjectDashbord";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useApi} from '../../hooks/useApi'
import {queryApi} from '../../utils/queryApi'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';


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


    {/* <Container>
      
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

    </Container> */}
    </SubContainer>
</>
) : (<p></p>) }

</>
  )
}

const Container = styled.div`
  width: 40%;
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
  height: 10%;
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const ProjectContainer = styled.div`
width: 100%;
height : 100% ; 
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
`

const Project= styled.div`
display : flex;
justify-content: space-between;
flex-flow :row wrap; 
align-items: stretch;
`


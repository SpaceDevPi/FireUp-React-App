import React from 'react';
import styled from "styled-components";
import Sidebar from '../components/InvestossorDashbord/Sidebar';
import MainContent from '../components/InvestossorDashbord/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Projects from '../components/Projects/Projects';
import {useApi} from '../hooks/useApi'; 
import { queryApi } from "../utils/queryApi";
import Event from "../components/events/components/Event";

import {  useState } from 'react';
import ProjectDashbord from  "../components/Projects/ProjectDashbord";



const InvestisorDashbord = () => {
  
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

  



  useEffect(() => {
    if (!investor) {
      navigate('/LoginInvestor');
    }
  }, [investor, navigate]);


  const [Events, setEvents] = useState(null);

  async function fetchData() {
    // console.log("aaaaaaa");

    const [evnts, err] = await queryApi("events");
    setEvents(evnts);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
    <div>
        <Container>
            <Sidebar />
            <MainContent />
        </Container>
    </div>
<div className="ProjectEvent">
     <div className="listOfProjectProfile">
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

       
       </div>
       <div className="listeOfEvent">
My event
<section className="eventslist">
      <div className="eventslist-centerprofile">
        {Events ? (
          Events.map((item) => {
            return <Event className=" " key={item.id} event={item} />;
          })
        ) : (
          <h1> Events not found </h1>
        )}
      </div>
    </section>
       </div>
       </div>
       </div>
  )
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%; 
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ProjectContainer = styled.div`
width: 100%;
height : 100% ; 
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

export default InvestisorDashbord


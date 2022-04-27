import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useApi } from "../../../hooks/useApi";
import './widget.css';
import TouchCarousel from 'react-touch-carousel';
import axios from 'axios';
import styled from "styled-components";
import ProjectDashbord from  "../../../components/Projects/ProjectDashbord"; 



function ProjectCard() {
    
    const {entrepreneur} = useSelector((state) => state.auth);

    const [projects,err,reload] = useApi('project/contractor-projects/' + entrepreneur._id);
  

    

    

    return (
        <div >
            <div className="row">
                <div className="col">
                    
                <div className="listOfProjectProfile">
     <ProjectContainer>
          <span className ="userShowUserTitle">My Projects : </span>
          <Project>
          {
          projects ? projects.map((project, index) => (
                <ProjectDashbord  project={project}
                    key={index}></ProjectDashbord>
            )): <h1>Products not found</h1>
        } 
          </Project>
            
          </ProjectContainer>

       
       </div>

                        
                </div>
            </div>
        </div>
    );
}



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

export default ProjectCard;
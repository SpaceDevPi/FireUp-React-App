import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useApi } from "../../../hooks/useApi";
import './widget.css';
import TouchCarousel from 'react-touch-carousel';
import axios from 'axios';


function ProjectCard() {
    
    const {entrepreneur} = useSelector((state) => state.auth);

    // const [projects,err,reload] = useApi('project/contractor-projects/' + entrepreneur._id);
  

    

    

    return (
        <div >
            <div className="row">
                <div className="col">
                    <h1>My Projects</h1>
                     {/* {projects.map(project => (
                         <div className="card" key={project._id}>
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                    ))} */}
                        
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
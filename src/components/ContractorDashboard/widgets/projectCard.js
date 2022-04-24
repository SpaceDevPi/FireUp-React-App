import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './widget.css';
import TouchCarousel from 'react-touch-carousel';
import axios from 'axios';


function ProjectCard() {
    const [projects, setProjects] = useState([]);
    const {entrepreneur} = useSelector((state) => state.auth);

    function getProjects() {
        axios.get('http://localhost:5000/api/project/contractor-projects/' + entrepreneur._id)
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getProjects();
        console.log(projects);
    }, []);

    function renderCard(index, modIndex) {
        return (
            <div className="carousel-card flex align-content-center" key={index}>
                
                <div className="carousel-title">titre</div>
                <div className="carousel-text">description</div>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                
            </div>
        )
    }

    return (
        <div >
           
        </div>
    );
}

export default ProjectCard;
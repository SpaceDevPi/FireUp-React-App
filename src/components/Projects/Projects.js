import React ,{ useEffect, useState }  from "react";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import { queryApi } from "../../utils/queryApi";
import Project from  "./Project";
import CheckBox from './Section/CheckBox';
import { category } from './Section/Datas';  
// const Project = React.lazy(() => import("./Project"));

export default function Projects() {
    

    const [projects,err,reload] = useApi('project');
    const deleteProject= async (id)=>{
        const[,err] = await queryApi('project/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
        } else await reload();
    }
    const [Skip, setSkip] = useState(0)
    

    return (
        <div>
           
        <Container> {
          projects ? projects.map((project, index) => (
                <Project deleteProject={deleteProject} project={project}
                    key={index}></Project>
            )): <h1>Products not found</h1>
        } </Container>
        </div>
    );
}
const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;


const Container = styled.div`
    padding: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

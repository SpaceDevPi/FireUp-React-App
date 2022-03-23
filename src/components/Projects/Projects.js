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
    // const [Limit, setLimit] = useState(8)

    // const [Filters, setFilters] = useState({
    //     category: []
       
    // })

    


    
    
    
    // const showFilteredResults = (filters) => {
    
    //   const variables = {
    //       skip: 0,
    //       limit: Limit,
    //       filters: filters
    
    //   }
      
    //   setSkip(0)
    
    // }
    
    // const handleFilters = (filters, category) => {
    
    //   const newFilters = { ...Filters }
    
    //   newFilters[category] = filters
    
    
    
    //   console.log(newFilters)
    
    //   showFilteredResults(newFilters)
    //   setFilters(newFilters)
    // }

    return (
        <div>
            {/* <FilterContainer>
              <Filter>
        <CheckBox  list={category}
                        handleFilters={filters => handleFilters(filters, "category")}/>

        </Filter>
        </FilterContainer> */}
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

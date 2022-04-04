import React ,{ useEffect, useState }  from "react";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import { queryApi } from "../../utils/queryApi";
import Project from  "./Project";
import CheckBox from './Section/CheckBox';
// import { category } from './Section/Datas';  
// const Project = React.lazy(() => import("./Project"));

export default function Projects() {
    

    // const [Projects,err,reload] = useApi('project');
    const [projects,setProjects]= useState(null)
    const[FiltreCategory,setFiltreCategory]=useState(null)
    const[conditionFiltre,setconditionFiltre]=useState(false)

    async function fetchData() {
        console.log("aaaaaaa")
        
        const [res, err] = await queryApi("project");
        setProjects(res);
       
      }
      useEffect( () => {
        fetchData()
           }, []);
            

         const FilterByCategory = async ()=>{
            var category = document.getElementById('selectCat').value

            setFiltreCategory(category)

              if(category=="Category")
              {
                const [res, err] = await queryApi("project");
                setProjects(res);
                setFiltreCategory(null)
                setconditionFiltre(false)

              }else
        {
              const [res, err] = await queryApi("project/"+category);
              setProjects(res);
              setconditionFiltre(true)
            }
           }

    const deleteProject= async (id)=>{
        const[,err] = await queryApi('project/'+id,{},'DELETE',false);
        if(err){
            console.log(err);
         } //else await reload();
    }
    const [Skip, setSkip] = useState(0)
    

    return (
        <div>
           

           <FilterContainer>
        <Filter>
          <FilterText>Filter Projects:</FilterText>
          <Select id="selectCat" onClick={()=>FilterByCategory()}>
            <Option  selected>
              Category
            </Option>
            <Option>Agriculture</Option>
            <Option>Art</Option>
            <Option>Buisness to Buisness </Option>
            <Option>Design</Option>
            <Option>E-commerce</Option>
            <Option>Engineering</Option>
          </Select>
         
          <Select>
            <Option  selected>
              Filter by Progess
            </Option>
            <Option>In Progess</Option>
            <Option>Completed Compaigns</Option>
            
          </Select>

        </Filter>          

        <Filter>
          <FilterText>Sort Projects:</FilterText>
          <Select>
            <Option selected>Most Funded</Option>
            <Option>Recently Launched (asc)</Option>
            <Option>Closing Soon</Option>
          </Select>
        </Filter>
      
      </FilterContainer>
{conditionFiltre &&
      <FilterContainer>
          <Filter>
        <a style={{color:'#940303',fontWeight: 'bold',fontSize:'20px'}}> Filter By Category : </a>   <a style={{color:'',fontWeight: 'inherit',fontSize:'20px'}}>{FiltreCategory} ({projects.length}) </a>
          </Filter>
</FilterContainer>
}
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

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
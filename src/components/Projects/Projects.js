import React ,{ useEffect, useState }  from "react";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import { queryApi } from "../../utils/queryApi";
import Project from  "./Project";
import Scrapped_projects from  "./Scrapped_projects";
import {Link as LinkS} from 'react-scroll'

import CheckBox from './Section/CheckBox';
import axios from "axios";
// import { category } from './Section/Datas';  
// const Project = React.lazy(() => import("./Project"));

export default function Projects() {
    
  

    // const [Projects,err,reload] = useApi('project');
    const [projects,setProjects]= useState(null)
    const[FiltreCategory,setFiltreCategory]=useState(null)
    const[conditionFiltre,setconditionFiltre]=useState(false)
    const[Scripted_data,setScripted_data]=useState()
    async function fetchData() {
        console.log("aaaaaaa")
        
        const [res, err] = await queryApi("project");
        setProjects(res);
       
        

      }
      useEffect( () => {
        fetchData()
        axios.get(`http://localhost:5000/uploads/scraping_data.json`)
        .then(res => {
          const project_scraping = res.data;
          // console.log("project_scraping" +project_scraping)
         
          setScripted_data(project_scraping);
          console.log("scrappping ")
          var i

  console.log(Scripted_data);
  console.log(projects);

          
         
        })
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
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Suggestions From Our partner startengine.com</h1>

<Container> {
          Scripted_data ? Scripted_data.map((Scripted_data, index) => (
                <Scrapped_projects  Scripted_data={Scripted_data}
                    key={index}></Scrapped_projects>
            )): <h1>Products not found</h1>
        } </Container>


<Container>
  


        </Container> 



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


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container2 = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
  opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;


export const ButtonInvest = styled(LinkS)`
    color:#fff;
    background:#F57C00;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    cursor:pointer;

    display: flex;
    align-items: center;
    justify-content: center;

`

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
 
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation:  clignote 2s linear infinite;
  @keyframes clignote {  
  50% { opacity: 0.5; }
}
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color:white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Action = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;
const ButtonDelete = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "red" : "white"};
  color: ${props => props.primary ? "white" : "red"};
  font-size: 1.1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;
const ButtonUpdate = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};
  font-size: 1.1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;
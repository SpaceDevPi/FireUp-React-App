import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {Link as LinkS} from 'react-scroll'
import './Project.css';
export default function ProjectDashbord(props) {

const navigate = useNavigate();
  const [project, setProject] = useState(props.project);
  const [updated, setUpdated] = useState(0);

  /* The first argument of useEffect is the actual effect to run, this will run only one time when the 
component renders. 
The return function is the “cleaner” which will behave like “componentWillUnmount” in this specific 
case. 
*/
console.log("utilisation use state " +project)
console.log("aaaaaa : "+ project.title)
  useEffect(() => {
    console.log(
      "I have finished rendering " +
        props.project.title +
        " price: " +
        props.project.title
    );
    return () => {
      console.log("I'm being destroyed");
    };
  });
  const addLike = () => {
    setProject({
      ...project,
      likes: Number(project.likes) + 1,
    });
    setUpdated((u) => u + 1);
  };


  console.log("utilisation use state apres add like " +project)

  /*This hook will trigger each time “updated” value mutates. [updated] this is called dependency array, 
it’s the array where our hook will “listen” to any changes on variables we include in the array and will 
trigger the hook. */
  useEffect(() => {
    console.log("apres use effect"+updated);
  }, [updated]);

  console.log("utilisation use state apres use effect" +project)

  const routeChange = () =>{ 
    let path = `projectdetail/`+project._id; 
    navigate(path)    }

  return (
    project.likes >= 5 ? (
      
<ProductFrameBest>
      <ProductImageWrapperBest>
        <ProductImageBest src={"../images/yoga.jpg"}></ProductImageBest>
      </ProductImageWrapperBest>
      <ProductInfoWrapperBest>
      <span>Best Project</span>
        <span>
        <Link to={"/projectdetail/" + project._id}>{project.title}</Link>
        </span>
        <span> {project.description} </span>
        <span>Likes : {project.likes} </span>
        <Button onClick={addLike}>Like</Button>
        <Action>
          <ButtonUpdate onClick={()=>navigate('/updateproject/'+project._id)}>Update</ButtonUpdate>
          <ButtonDelete onClick={()=>props.deleteProject(project._id)}>Delete</ButtonDelete>

        </Action>
      </ProductInfoWrapperBest>
    </ProductFrameBest>
    ):(
      

      <div className="project_card">
      <h3>{project.title} </h3>
      <Container  onClick={routeChange}> 
     
      {/* <img src={`${process.env.REACT_APP_API_URL_UPLOADS}/${project.images}`}/>      */}
      <img src='project.png' className='projectImage'/>

      <Info>
     
                </Info>
                </Container>
                <div className="project_box">
                <p> {project.description} </p>
                </div>
        <ButtonInvest  onClick={routeChange}>Invest</ButtonInvest>

                

                    </div>


    )
    
  );
}


const Product_card = styled.div`
max-width: 300px;
    overflow: hidden;
    height: 500px;
    padding: 15px;
    box-shadow: 0 0 15px #ddd;
    margin: 10px 0;
    position: relative;
`;

const Product_box  = styled.div`
width: 100%;
h2{
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: capitalize;
  cursor: pointer;
  color: #323232;
}
p{
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 70px;
  overflow: hidden;
  color: #323232;
}
`;

const Row_btn = styled.div`
width: 100%;
margin-top: 10px;
display: flex;
justify-content: space-between;
{
  width: 50%;
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 6px;
}
`;


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

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 200px;
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
height: 20%;
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


import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {Link as LinkS} from 'react-scroll'
import './posts.css';
import { useApi } from "../../../hooks/useApi";
import { queryApi } from "../../../utils/queryApi";
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function ManageUpdatePost() {

    const navigate = useNavigate();
    const {id} = useParams();
    const {nomprojet} = useParams();

    const [posts,err,reload] = useApi('post/postByProjects/'+id);

  

    const deleteProject= async (id)=>{
        
    if( window.confirm("Voulez vous supprimer définitivement ce post ")  )      
      {
        const [res,err] = await  queryApi('post/deletepost/'+id,{},'DELETE',false);
                     if(err){
                         console.log(err);
                     } else await reload();
      }
      //  confirmAlert({
        //     title: 'Confirm to Delete',
        //     message: 'Are you sure to do this.',
        //     buttons: [
        //       {
        //         label: 'Yes',
        //          onClick: () => (  async function deletePo() 
        //          {
        //              const [res,err] = await  queryApi('post/deletepost/'+id,{},'DELETE',false);
        //              if(err){
        //                  console.log(err);
        //              } else await reload();
        //          })
        //       },
        //       {
        //         label: 'No',
        //       }
        //     ]
        //   });

    }
    const category = [
        { key: 1, value: "Agriculture" },
        { key: 2, value: "Art" },
        { key: 3, value: "Buisness to Buisness" },
        { key: 4, value: "Design" },
        { key: 5, value: "E-commerce" },
        { key: 6, value: "Engineering" },
    ]
  return (
      <div className="container">
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#F57C00'}}>Manage Updates Posts for Your Project </h1>
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'black'}}>  {nomprojet}</h1>
            
                <div className="add_btn mt-2 mb-2">
                        <button className="btn btn-primary"  onClick={()=>navigate('/managemyprojects/createpost/'+nomprojet +'/'+id)}>Add A Post</button>

                    </div>
 
 <Container2>
 {posts ? posts.map((posts,index) => (   
    <div className="posts_card">
      <h3>{posts.title} </h3>
      <Container  > 
      <img  src={`http://localhost:5000/uploads/${posts.images}`}/>     

      <Info>


                </Info>
                </Container>
                <div className="product_box">
                <p> {posts.content} </p>
                </div>
                <ButtonContainer >
        <ButtonDelete  onClick={() => deleteProject(posts._id)}  >Delete this post </ButtonDelete>
        </ButtonContainer>
                

                    </div>
  )) : (<h1>no posts found for this project</h1>) } </Container2>

      </div>
  )
}

const Image = styled.img`
height: 90%;
width : 90%;
z-index: 2;
`;
const Container2 = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ButtonDelete = styled(LinkS)`
    color:#fff;
    background:#dc3545;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    text-decoration: none;
    
    display: flex;
    justify-content: center;
    
`

const Product_card = styled.div`
width: 500px;
overflow: hidden;
height: 550px;
padding: 15px;
box-shadow: 0 0 15px #ddd;
margin: 10px 0;
position: relative;
`;

const Info = styled.div`
opacity: 1;
max-width: 500px;
max-height: 500px;
position: relative;
top: 0;
left: 0;
// background-color: rgba(0, 0, 0, 0.2);
// z-index: 3;
// display: flex;
// align-items: center;
// justify-content: center;
// transition: all 0.5s ease;
// cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

`;

const ContainerImage = styled.div`
flex: 1;
margin: 2rem;

display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;


`;

const ButtonContainer = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

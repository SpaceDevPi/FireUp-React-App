import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import './PostsFront.css';
import { queryApi } from '../../utils/queryApi';
const PostsPageByProject = ({projectid}) => {

    const [posts,setPosts]= useState(null)


async function fetchData() {
    
    const [res, err] = await queryApi("post/postByProjects/" + projectid);
    console.log(res)
    setPosts(res);
 
  }
  useEffect( () => {
    fetchData()
       }, [projectid]);
       console.log("toRenderPosts :" +posts)

    return (
        <Container>
                <MoreDetailPageHeading>Updates Posts Section</MoreDetailPageHeading>
            
                <ContainerPosts>
                {posts ? posts.map((posts) => (
  

                <MoreDetailPageWrap>
                              <Col>
                    
                <div className="Posts_card">
      <h3>{posts.title} </h3>
      <Container  > 
      <img  src={`http://localhost:5000/uploads/${posts.images}`}/>     

      <Info>


                </Info>
                </Container>
                <div className="Product_box">
                <p> {posts.content} </p>

                <span> Posted: {new Date(posts.date).toLocaleDateString()} at {new Date(posts.date).getHours()}:{new Date(posts.date).getMinutes()} </span>
                </div>
             
                

                    </div>
                     </Col>
                                      
                                     
                    </MoreDetailPageWrap>  
                                        )) : 
                                       ( <h1>No Posts</h1>)
                                      }
                                 
                                    </ContainerPosts>
                </Container>
    )
}

export default PostsPageByProject

const Container = styled.div``;


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

const ContainerPosts = styled.div`
flex: 1;

display: flex;
flex-wrap: wrap;

// align-items: center;
justify-content: center;
margin-left : 230px;
// align-items : center;
position: relative;

`;


export const MoreDetailPageHeading = styled.h1`
    font-size:2rem;
    padding:2rem 5%;
`
export const MoreDetailPageWrap = styled.div`
    padding:1rem 5%;
    width:85%;
`
export const Row = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:2rem;
    margin-top:2rem;
    // border-top:.1rem solid #000;

    @media (max-width:768px){
        flex-direction:column;
        align-items:center;
        text-align:center;
        margin-bottom:6rem;
    }
`
export const Col =styled.div`
    flex 1 1 50%;
`
export const Img = styled.img`
    max-width:50%;
    height:auto;
    padding-top:2rem;
`
export const CHeading = styled.h2`
    color:#333;
    font-size:1rem;
    font-weigth:700;
    padding-top:2rem;
`
export const PostDate = styled.h4`
    color:#F54748;
    font-size:1.2rem;
    font-weigth:500;
    margin-bottom:1rem;
`
export const MoreDetailPageText = styled.p`
    color:#827f7f;
    font-size:1.2rem;
    line-height:2rem;
`
export const ButtonReply = styled(LinkS)`
    color:#fff;
    background:#F57C00;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    cursor:pointer;

    &:hover{background:#000;color:#fff}
`
export const PHeading = styled.h2`
     color:#333;
    font-size:2rem;
    font-weigth:700;
    padding:3rem;
    text-align:center;
    text-decoration:underline;
`
export const Form = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
export const Input = styled.input`
    width:50%;
    height:5rem;
    padding:1rem 2rem;
    font-weigth:400;
    font-size:1.8rem;
    border:1px solid #767575;
    margin:1rem 1rem;

    &:active,
    &:focus{
        outline:none;
        color:#7675775;
    }
    @media (max-width:768px){width:90%}
`
export const TextArea = styled.textarea`
    width:50%;
    height:15rem;
    padding:1rem 2rem;
    font-weigth:400;
    font-size:1.8rem;
    border:1px solid #767575;
    margin:1rem 1rem;

    &:active,
    &:focus{
        outline:none;
        color:#7675775;
    }
    @media (max-width:768px){width:90%}
`
export const BtnWrap = styled.div`
    width:100%;
    display:flex;
    margin-top:2rem;
    justify-content:center;
`
export const BtnLink = styled(LinkS)`
    background:#F57C00;
    color:#fff;
    font-size:1.5rem;
    padding:1rem 3rem;
    text-align:center;
    border-radius:.5rem;
    cursor:pointer;

    &:hover{
        background:#000;
        transition:0.2s;
        color:#fff;
    }
`
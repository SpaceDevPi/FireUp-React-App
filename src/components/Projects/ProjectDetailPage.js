import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";

import Comment from "./Comments/Comment";
import {Link as LinkS} from 'react-scroll'
import MoreDetailPage from "./MoreDetailPage";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Comments from "./Comments/Comments";


export default function ProjectDetailPage(props)  {
  const { id } = useParams();
const a = ""
let date
let date_modifier
   const [toRender,err,reload] = useApi('project/project/'+id);
  // const date = new Date(toRender.end_date).toLocaleDateString();
  // console.log(toRender.map(title => {toRender[title]}))
  // var dataArray = Object.keys(toRender).map(function(k){return toRender[0]});

  // function afficherProps(obj, nomObjet) {
  //   let resultat = "";
  //   for (let i in obj) {
  //     if (obj.hasOwnProperty(i)) {
  //         resultat += `${nomObjet}.${i} = ${obj[i]}\n`;
  //     }
  //   }
  //   return resultat;
  // }
let projectid
if( toRender != null)
{
date= toRender.end_date
projectid = toRender._id
console.log("images "+ toRender.images)
}
date_modifier = new Date(date).toLocaleDateString()

  return (
    
    <div>
     
    <Container>
    {toRender  ? (

      <Wrapper>
        <ImgContainer>
          <Image src={`http://localhost:5000/uploads/${toRender.images}`} />
        </ImgContainer>
        <InfoContainer>
          <Title>{toRender.title} </Title>
          <Desc>
          {toRender.description}
          </Desc>
          <Row>
          <Text> <h1> Money to raise : $ {toRender.amount_to_collect}</h1></Text>

          <RowStat>

         

          <h3>Raised Money : $ {toRender.collected_amount} </h3> 
          <h3>Investors : 170</h3>

         

          <h3>Offering Type :  {toRender.offering_type}</h3>
          <h3>Price per share :  {toRender.price_per_share}</h3>
          <h3 name="end_date" >End of collect : {date_modifier}</h3>

          
          </RowStat>

          <br/><br/>
          </Row>
          <ButtonInvest>Invest</ButtonInvest>

        </InfoContainer>


      </Wrapper>
 ) : (
  <p>Product not found</p>
)}
    </Container>
    <MoreDetailPage/>
    <Comments currentUserId="1" projectid={projectid} />
    
    </div>
  );
};


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const Stats = styled.div `
{
  padding: 0 13.5px;
  padding-top: 0px;
  padding-right: 13.5px;
  padding-bottom: 0px;
  padding-left: 13.5px;
  max-width: 375px;
  margin: 0 auto;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}`;

export const ButtonInvest = styled(LinkS)`
    color:#fff;
    background:#F57C00;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    cursor:pointer;

    left:80%;

    position: absolute;

    &:hover{background:#000;color:#fff}
`

export const Row = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:2rem;
    margin-top:2rem;
    border-top:.1rem solid #000;

    @media (max-width:768px){
        flex-direction:column;
        align-items:center;
        text-align:center;
        margin-bottom:6rem;
    }
`
export const statText=styled.h3`
color:#F57C00;

`
export const RowStat = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:2rem;
    margin-top:2rem;
 
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


export const Text = styled.h1`
    color:#F57C00;
    font-size:1.2rem;
    font-weigth:500;

`
export const DetailsHeading = styled.h1`
    font-size:2rem;
    padding:2rem 5%;
`
export const DetailWrap = styled.div`
    padding:1rem 5%;
    width:85%;
`
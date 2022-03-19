import React from 'react'
import styled from "styled-components";
import { FormInvestir } from './FormInvestir';

 function InvestementForm ()  {
  return (
    <Container>
            
    <img src="project.png" />
    <div class="MultiStep">
        <FormInvestir/>
   
    </div>
</Container>
  )
}


const Container = styled.div`
  padding: 0px;
  display :flex ; 
  flexDirection : column ; 

  img {
    /* z-index: -1; */
    width: 40% ;
    height: 75%;
    position: absolute;
    margin-left : 5%; 
   
    }
  }
  .MultiStep{
    display: flex;
    margin-left : 60% ; 
    width  : 30% ; 
    height  : 75%; 

  }


`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content:end ;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #f26716;
  color: #f26716;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(242,103,22,0.3);
    color: #f26716;
    text-decoration: none;
  }
`;



export default InvestementForm;

import React from 'react';
import styled from "styled-components";
import Sidebar from '../components/InvestossorDashbord/Sidebar';
import MainContent from '../components/InvestossorDashbord/MainContent';

const InvestisorDashbord = () => {
  return (
    <div>
        <Container>
           
            <MainContent />
            
        </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #F57C10 80%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default InvestisorDashbord; 

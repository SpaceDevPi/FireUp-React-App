import React from 'react';
import styled from "styled-components";
import Sidebar from '../components/InvestossorDashbord/Sidebar';
import MainContent from '../components/InvestossorDashbord/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const InvestisorDashbord = () => {
  const navigate = useNavigate();

  const { investor } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!investor) {
      navigate('/LoginInvestor');
    }
  }, [investor, navigate]);

  return (
    <div>
        <Container>
            <Sidebar />
            <MainContent />
        </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%; 
  background: linear-gradient(to bottom right, white 0%, #F57C10 80%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default InvestisorDashbord


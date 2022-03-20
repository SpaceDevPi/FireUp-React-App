import React from 'react';
import styled from "styled-components";
import Sidebar from '../components/ContractorDashboard/Sidebar';
import MainContent from '../components/ContractorDashboard/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ContractorDashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/signInContractor');
    }
  }, [user, navigate]);

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
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #F57C10 80%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default ContractorDashboard

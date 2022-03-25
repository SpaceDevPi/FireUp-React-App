import React from 'react';
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useApi} from '../../hooks/useApi'
import {queryApi} from '../../utils/queryApi'
export default function Navbar  () {
  const navigate = useNavigate();

  const { investor } = useSelector((state) => state.auth);
  const [toRender,err,reload] = useApi('investors/investorId/'+investor._id);
  const [errors, setErrors] = useState({ visbile: false, message: "" });

    useEffect(() => {
      if (!investor) {
        navigate('/LoginInvestor');
      }
    }, [investor, navigate]);


  return (
    <div>
      { toRender ? (
        <div>
        <NavbarContainer>
            <Text>
            <p>Welcome to FireUp </p><span className ="userShowUserTitle"><b className="fireUp">{toRender.firstName} {toRender.lastName} </b></span>

            </Text>
            <img src={toRender.image} className="image" />
          
        </NavbarContainer>
            <InputContainer className='inputContainer'>
            <Icon>
                <FiSearch />
            </Icon>
            <Input type="text" placeholder="How can we help you!" />
        </InputContainer>
        </div>
          ) : (<p></p>) }

        </div>
  )
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin-left : 3% ; 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`; 

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`;



import React from 'react'
import Projects from '../components/Projects/Projects'

import styled from "styled-components";
import ProjectDetailPage from '../components/Projects/ProjectDetailPage'




export const Explore = () => {
 
  return (
    <Container>

<Title>Explore Projects</Title>
      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Projects:</FilterText>
          <Select>
            <Option disabled selected>
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
            <Option disabled selected>
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
      
      </FilterContainer> */}
       <Projects/>

    </Container>
  )
}


const Container = styled.div``;

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
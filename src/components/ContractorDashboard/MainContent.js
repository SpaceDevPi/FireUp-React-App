import React from 'react';
// import styled from "styled-components";
// import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import WelcomeWidget from './widgets/WelcomeWidget';
import AchievementWidget from './widgets/AchievementWidget';

const MainContent = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <WelcomeWidget />
          <AchievementWidget />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

        </Grid>
        <Grid item xs={12} md={6} lg={4}>

        </Grid>
      </Grid>
    </>
    // <Container>
    //     <Navbar />
    // </Container>
    // <SubContainer>
    //     <SectionOne>

    //     </SectionOne>
    // </SubContainer>
  )
}

// const Container = styled.div`
//   width: 80%;
//   background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
//   border-bottom-right-radius: 2rem;
//   border-top-right-radius: 2rem;
//   margin: 1rem 8rem 1rem 4rem;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     margin: 1rem 0 0 0;
//   }
// `;

// const SubContainer = styled.div`
//   margin: 0.5rem 0;
//   height: 80%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     height: 100%;
//   }
// `;
// const SectionOne = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 40%;
//   gap: 2rem;
//   width: 100%;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     flex-direction: column;
//     align-items: center;
//     height: max-content;
//   }
// `;

export default MainContent

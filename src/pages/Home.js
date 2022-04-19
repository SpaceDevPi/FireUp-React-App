import React, {useState, useEffect } from 'react';
import '../styles/home.css';
// import Rocket from '../assets/images/rocket.svg';
import HeroSection from '../components/HeroSection';
import Features from '../components/homeWidget/features';
import GetStart from '../components/homeWidget/getStart';






const Home = () => {


  return (
    <>
      <HeroSection />
      <Features />
      <GetStart />
      
  

    </>
  )
}

export default Home

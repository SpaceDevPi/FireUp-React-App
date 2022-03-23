import React, {useState } from 'react';
import '../styles/home.css';
// import Rocket from '../assets/images/rocket.svg';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import Home from '../pages/Home';
import Explore from "../pages/Explore";
import About from "../pages/About";
import Event from "../pages/Event";
import Blog from "../pages/Blog";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from 'react-router-dom';
import ContractorDashboard from './ContractorDashboard';
import SignUpContractor from '../pages/SignUpContractor';
import RegisterInvestisor from '../components/InvestorForm/RegisterInvestor';
import InvestisorDashbord from '../pages/InvestisorDashbord'; 
import InvestorLogin from '../components/InvestorForm/InvestorLogin'
import InvestementForm from '../components/investment/InvestementForm'
import Login from '../pages/Login';
import Profile from '../components/ContractorDashboard/Profile';
import ProfileInvestor from '../components/InvestossorDashbord/ProfileInvestor' 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen}  toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signUpContractor" element={<SignUpContractor />} />
        <Route path="/signInContractor" element={<Login />} />
        <Route path="/RegestrationInvestor" element={<RegisterInvestisor/>}/>
        <Route path="/dashboardInvestor" element={<InvestisorDashbord/>}/>
        <Route path="/LoginInvestor" element={<InvestorLogin/>}/>
        <Route path="/InvestementProject" element={<InvestementForm/>}/>
        <Route path="/dashboard" element={<ContractorDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileInvestor" element={<ProfileInvestor />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default Index
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useApi} from '../hooks/useApi';
import '../styles/dashboard.css';
import WalletCard from "../components/ContractorDashboard/widgets/walletCard";
import NotificationCard from "../components/ContractorDashboard/widgets/notificationCard";
import ProjectCard from "../components/ContractorDashboard/widgets/projectCard";
import CoachCard from "../components/ContractorDashboard/widgets/coachCard";
import { useTour } from '@reactour/tour'
import Tour from "reactour";
import { Button } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from "../Blockchain/context/TransactionContext";


const ContractorDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const navigate = useNavigate();
  const { entrepreneur } = useSelector((state) => state.auth);
  const [toRender,err,reload] = useApi('entrepreneurs/'+entrepreneur._id);
  console.log(toRender);

  useEffect(() => {
    if (!entrepreneur) {
      navigate('/signInContractor');
    }
    setIsOpen(true);
  }, [entrepreneur, navigate]);
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading , Balance} = useContext(TransactionContext);

  const tourConfig = [
    {
      selector: '[data-tut="reactour__Welcome]',
      content: `Welcome to your dashboard! Here you can see your wallet, your notifications, and your projects.`,
    },
    {
      selector: '[data-tut="reactour__step1"]',
      content: `Ok, let's start by creating a project.`,
    },
    {
      selector: '[data-tut="reactour__step2"]',
      content: `Next, we move to your wallet. You can see your current balance and how much you have earned.`,
    },
    {
      selector: '[data-tut="reactour__step3"]',
      content: `And now, your notifications. Here you can see all the notifications you have received.`,
    },
    {
      selector: '[data-tut="reactour__step4"]',
      content: `Here you can see all the projects you have created.`
    },
    {
      selector: '[data-tut="reactour__step5"]',
      content: `Here you can find all the events you joined.`,
    },
    {
      selector: '[data-tut="reactour__step6"]',
      content: `tour is done and you can close it.`
    },
  ];

  function handleTourClose(){
    setIsOpen(false);
  }

  const handleLastButtonClick = () => {
    setIsLastSlide(false);
  }

  return (
    <div>
      { toRender ? (
      <div className="container reactour__Welcome">
        <div className="dashboard-header">
          <div className="row">
            <div className="col float-md-start">
              <h1>My dashboard </h1>
            </div>
            <div className="col float-md-end" >
              <button className="btn btn-primary float-end mt-2 " data-tut="reactour__step1" onClick={()=>{navigate('/addproject')}}>
                New project
              </button>
            </div>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="row d-flex flex-row">
            <div className="col d-flex justify-content-start">
              <div className="col-md-4 mt-4 float-left" data-tut="reactour__step2">
                <WalletCard  />
              </div>

              
                <div class="col-md-4 mt-4 float-right m-3">
                  <div class="card profile-card-4 profile">
                    
                    <div class="card-body pt-5">
                      <img
                        src="https://randomuser.me/api/portraits/women/14.jpg"
                        alt="profile-image"
                        class="profile"
                      />
                      <h5 class="card-title text-center">{toRender.firstname} {toRender.lastname}</h5>
                      <p class="card-text text-center">
                        Company: 
                      </p>
                      <div class="icon-block text-center">
                      <p class="mt-3 w-100 float-left text-center buttons">
                        <button class="btn-view" onClick={() => {navigate("/profile")}}>view profile</button>
                        {!currentAccount && (
            <button
              type="button"
               onClick={connectWallet}
              className="btn-view"
            >
              <p >
                Connect Wallet
              </p>
            </button>
          )} 
                      </p>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div className="col-md-4 mt-4 float-left" data-tut="reactour__step3">
                  <NotificationCard />
                </div>
              
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-12" data-tut="reactour__step4">
              
                <ProjectCard />
              
              <div className="col-md-4 mt-4 float-left" data-tut="reactour__step5">
                {/* <CoachCard /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (<div>hello</div>)}
      <Tour 
        steps={tourConfig} 
        isOpen={isOpen}
        onRequestClose={handleTourClose}
        lastStepNextButton={<Button onClick={handleTourClose}>Done! Let's start </Button>}
        closeWithMask={true}
      />
    </div>
  );
};

export default ContractorDashboard
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {useApi} from '../hooks/useApi';
import '../styles/dashboard.css';
import WalletCard from "../components/ContractorDashboard/widgets/walletCard";
import NotificationCard from "../components/ContractorDashboard/widgets/notificationCard";
import ProjectCard from "../components/ContractorDashboard/widgets/projectCard";
import CoachCard from "../components/ContractorDashboard/widgets/coachCard";
import { useTour } from '@reactour/tour'
import Tour from "reactour";


const ContractorDashboard = () => {
  const { setIsOpen } = useTour();
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

  const tourConfig = [
    {
      selector: '[data-tut="reactour__iso"]',
      content: `Ok, let's start with the name of the Tour that is about to begin.`
    },
    {
      selector: '[data-tut="reactour__logo"]',
      content: `And this is our cool bus...`
    },
    {
      selector: '[data-tut="reactour__copy"]',
      content: `Keep in mind that you could try and test everithing during the Tour. 
        For example, try selecting the highlighted text…`
    },
  ];


  return (
    <div>
      { toRender ? (
      <div className="container">
        <div className="dashboard-header">
          <div className="row">
            <div className="col float-md-start">
              <h1>My dashboard </h1>
            </div>
            <div className="col float-md-end" >
              <button className="btn btn-primary float-end mt-2 e-first-step" data-tut="reactour__copy" onClick={()=>{navigate('/addproject')}}>
                New project
              </button>
            </div>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="row d-flex flex-row">
            <div className="col d-flex justify-content-start">
              <div className="col-md-4 mt-4 float-left">
                <WalletCard />
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
                      </p>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div className="col-md-4 mt-4 float-left">
                  <NotificationCard />
                </div>
              
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-12">
              
                <ProjectCard />
              
              {/* <div className="col-md-4 mt-4 float-left">
                <CoachCard />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      ) : (<div>hello</div>)}
      {/* <Tour 
        steps={tourConfig} 
        isOpen={setIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      /> */}
    </div>
  );
};

export default ContractorDashboard
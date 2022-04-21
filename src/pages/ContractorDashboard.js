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

const ContractorDashboard = () => {
  const navigate = useNavigate();

  const { entrepreneur } = useSelector((state) => state.auth);
  const [toRender,err,reload] = useApi('entrepreneurs/'+entrepreneur._id);
  console.log(toRender);

  useEffect(() => {
    if (!entrepreneur) {
      navigate('/signInContractor');
    }
  }, [entrepreneur, navigate]);


  return (
    <div>
      { toRender ? (
      <div className="container">
        <div className="dashboard-header">
          <div className="row">
            <div className="col float-md-start">
              <h1>My dashboard </h1>
            </div>
            <div className="col float-md-end">
              <button className="btn btn-primary float-end mt-2" onClick={()=>{navigate('/addproject')}}>
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

              
                <div class="card col-md-4 mt-4 float-right m-3">
                  <div class="card profile-card-4">
                    
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
                        
                        
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 w-100 float-left text-center buttons">
                    <button class="btn-view" onClick={() => {navigate("/profile")}}>view profile</button>
                  </p>
                </div>

                <div className="card col-md-4 mt-4 float-left">
                  <NotificationCard />

              </div>
              
            </div>
          </div>
          <div className="row">
          <div className="col d-flex justify-content-start">
              <div className="col-md-4 mt-4 float-left">
                <ProjectCard />
              </div>
              <div className="col-md-4 mt-4 float-left">
                <CoachCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (<div>hello</div>)}
    </div>
  );
};

export default ContractorDashboard
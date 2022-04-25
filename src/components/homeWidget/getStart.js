import React from 'react'
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import { deepOrange } from '@mui/material/colors';
import { Link } from "react-router-dom";

const GetStart = () => {
  return (
    <div>
      <div className="container">
		    <h2 className="section-heading text-center mb-4">It's simple to get started.</h2>
		    <div className="section-intro single-col-max mx-auto text-center mb-5">
                Apply for free in less than 2 minutes.
		    </div>
		    <section className="d-flex flex-row">
            
			    <div className="m-sm-2">
				    <div className="col-auto item-icon">
                        <ContentPasteOutlinedIcon sx={{fontSize: 80, color: deepOrange[500]}} />
                    </div>
				    <div className="col">
					    <h4 className="item-title">Apply</h4>
					    <div className="item-desc">FireUp reviews every company application internally to determine whether it meets our compliance and eligibility requirements. If it's a good match, we move forward!</div>
				    </div>
			    </div>
            

                
                <div className="m-sm-2">
				    <div className="col-auto item-icon">
                        <CampaignOutlinedIcon sx={{fontSize: 80, color: deepOrange[500]}} />
                    </div>
				    <div className="col">
					    <h4 className="item-title">Create</h4>
					    <div className="item-desc">Tell your story in your own words. Work with our team to build and design your campaign page to attract investors. Our creative team will help you!</div>
				    </div>
			    </div>
                

                
                <div className="m-sm-2">
				    <div className="col-auto item-icon">
                        <AdjustOutlinedIcon sx={{fontSize: 80, color: deepOrange[500]}} />
                    </div>
				    <div className="col">
					    <h4 className="item-title">Evaluate</h4>
					    <div className="item-desc">What's your valuation? How much control do you want to keep of your company? it's all up to you.</div>
				    </div>
			    </div>
               
            </section>
               
	    </div>
        <section id="form-section" className="form-section mt-4 mb-4">
	    <div class="container">
		    <div class="lead-form-wrapper single-col-max mx-auto theme-bg-light rounded p-5">
			    <h2 class="form-heading text-center">Apply here</h2>
			    <div class="form-intro text-center mb-3">fill the form to get access.</div>
			    <div class="form-wrapper mx-auto">					
					<Link className="btn btn-warning btn-submit w-100" to="/signUpContractor">Get funding </Link>
	                   
			    </div>
		    </div>
	    </div>
    </section>

    </div>
  )
}

export default GetStart

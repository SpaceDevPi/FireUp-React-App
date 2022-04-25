import React from 'react'
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { deepOrange } from '@mui/material/colors';


const Features = () => {
  return (
    <div>
      <div className="container py-5">
		    <h2 className="section-heading text-center mb-3">We cover everything you need.</h2>
		    <div className="row text-center">
			    <div className="item col-12 col-md-6 col-lg-4">
				    <div className="item-inner p-3 p-lg-4">
					    <div className="item-header mb-3">
						    <div className="item-icon">
                  <BubbleChartOutlinedIcon sx={{fontSize: 80, color: deepOrange[500]}} />
                </div>
						    <h3 className="item-heading">Dedicated Account Manager</h3>
					    </div>
					    <div className="item-desc">
                You receive a dedicated account manager to help prepare your offering, which will then be reviewed by FireUp’s compliance team. 
					    </div>
				    </div>
			    </div>

          <div className="item col-12 col-md-6 col-lg-4">
				    <div className="item-inner p-3 p-lg-4">
					    <div className="item-header mb-3">
						    <div className="item-icon">
                  <SupportAgentOutlinedIcon sx={{fontSize: 80, color: deepOrange[500]}} />
                </div>
						    <h3 className="item-heading">Investor Information and Coaching</h3>
					    </div>
					    <div className="item-desc">
                Access your investor community’s contact information for updates or promotional purposes. 
					    </div>
				    </div>
			    </div>

          <div className="item col-12 col-md-6 col-lg-4">
				    <div className="item-inner p-3 p-lg-4">
					    <div className="item-header mb-3">
						    <div className="item-icon">
                  <HistoryOutlinedIcon sx={{fontSize: 80, color: deepOrange[500]}} />
                </div>
						    <h3 className="item-heading">Investment History</h3>
					    </div>
					    <div className="item-desc">
                View and follow the number of investors and followers your campaign has week over week. 
					    </div>
				    </div>
			    </div>
			    
		    </div>
	    </div>
    </div>
  )
}

export default Features

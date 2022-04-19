import { Formik } from "formik";
import { useState , useEffect} from "react";
import axios from "axios";
import { queryApi } from "../../utils/queryApi";
import {useApi} from "../../hooks/useApi";
import { useSelector } from "react-redux";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";



export default function CampanySection() {
    const [company, setCompany] = useState(false);
    const { entrepreneur } = useSelector((state) => state.auth);
    

   


//       const [company,err,reload]= useApi("companies/entrepreneur/6248550b1f4217b5a91b2a93")
// console.log("company :" + company)    



async function fetchData() {
    
    const [res, err] = await queryApi("companies/entrepreneur/"+entrepreneur._id); 
    console.log(res[0])

    setCompany(res[0]);
    }
  useEffect( () => {
    // getUser();
    fetchData()
       }, [entrepreneur._id]);
       console.log("company: "+company)

// const getCompany = () => {
//         axios.get(`http://localhost:5000/api/companies/entrepreneur/${idEntrepreneur}`)
//         .then(res => {
//             console.log(res.data)
//             setCompany(res.data)
//         }
//         )
//         .catch(err => {
//             console.log(err)
//         })

//     }


//     useEffect(() => {
//         getUser();
//         console.log(idEntrepreneur)
//         getCompany();
//     }, [idEntrepreneur])
    
    
    
    return(

        <div className="companyForm">
            <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
                  <div className="userShowTopTitle">
                    <span className="userShowUserTitle">{company.companyName}</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">{company.companyEmail}</span>
                  </div>
                  <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle"></span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">{company.companyPhone}</span>
                  </div>
                 
                  <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {company.companyAddress} | {company.companyCity} | {company.companyZip} 
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    )
}

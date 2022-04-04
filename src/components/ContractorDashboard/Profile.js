import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../styles/profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { queryApi } from "../../utils/queryApi";
import axios from "axios";
import CompanySection from "./companySection";

const url = "http://localhost:5000/api/entrepreneurs/";

export default function Profile() {
  const navigate = useNavigate();
  const [entrepreneur , setUser] = useState(false)

  const getUser = () => {
    const user = localStorage.getItem('user')
    const pp = JSON.parse(user)
    console.log(pp)
    setUser(pp)
  }

  useEffect(() => {
      getUser();
      setFormData({
        firstname: entrepreneur.firstname,
        lastname: entrepreneur.lastname,
        phone: entrepreneur.phone,
        address: entrepreneur.address,
        city: entrepreneur.city,
        state: entrepreneur.state,
        zip: entrepreneur.zip,
      });
    
  }, [entrepreneur.address, entrepreneur.city, entrepreneur.firstname, entrepreneur.lastname, entrepreneur.phone, entrepreneur.state, entrepreneur.zip])

 

  const id = entrepreneur._id;

  const [formData, setFormData] = useState({
    firstname: entrepreneur.firstname,
    lastname: entrepreneur.lastname,
    phone: entrepreneur.phone,  
    address: entrepreneur.address,  
    city:entrepreneur.city,  
    state: entrepreneur.state,  
    zip: entrepreneur.zip,  
  });




  console.log();

  useEffect(() => {
    
  }, []);


  const onSubmit = async (e) => {
    // update the user's information
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);
    console.log(body);
    try {
      const res = await axios.put(`http://localhost:5000/api/entrepreneurs/${id}`, body, config);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location.href = "/profile";
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {entrepreneur ? (
        <>
          <div className="user">
            <div className="userTitleContainer">
              <h1 className="userTitle">My Profile</h1>
            </div>
            <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
                  <div className="userShowTopTitle">
                    <span className="userShowUserTitle">{entrepreneur.firstname} {entrepreneur.lastname}</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">{entrepreneur.email}</span>
                  </div>
                  <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">{ new Date(entrepreneur.birthday).toLocaleDateString()}</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">{entrepreneur.phone}</span>
                  </div>
                 
                  <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {entrepreneur.address} | {entrepreneur.city} | {entrepreneur.state} 
                    </span>
                  </div>
                </div>
              </div>
              <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form onSubmit={onSubmit} className="userUpdateForm">
                  <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                      <label>First name</label>
                      <input
                        type="text"
                        name="firstname"
                        className="userUpdateInput"
                        value={formData.firstname}
                        onChange={(e) =>
                          setFormData({ ...formData, firstname: e.target.value })
                        }
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="lastname"
                        value={formData.lastname}
                        onChange={(e) =>
                          setFormData({ ...formData, lastname: e.target.value })
                        }
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        className="userUpdateInput"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>City </label>
                      <input
                        type="text"
                        name="city"
                        className="userUpdateInput"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />

                    </div>
                    <div className="userUpdateItem">
                      <label> State </label>
                      <input
                        type="text"
                        name="state"
                        className="userUpdateInput"
                        value={formData.state}
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                     
                      
                    </div>
                    <button className="button">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <CompanySection  idEntrepreneur={id}/>
    </>
  );
}

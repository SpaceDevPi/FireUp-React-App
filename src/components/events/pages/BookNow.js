import React, { Component, useState, useEffect } from "react";

import { Link as LinkS } from "react-scroll";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import moment from "moment";

import { queryApi } from "../../../utils/queryApi";
import styled from "styled-components";
import Axios from "axios";

import "../booknow.css";

import defaultBcg from "../images/room-3.jpeg";
import Item from "antd/lib/list/Item";
export default function BookNow(props) {
  const { id, id2 } = useParams();
  const [toRender, setToRender] = useState(null);

  const [Iteam, setiteam] = useState(true);

  async function fetchData() {
    console.log("aaaaaaa");

    const [res, err] = await queryApi("events/EventId/" + id);
    console.log(res);
    setToRender(res);

    console.log(id);
  }

  useEffect(() => {
    fetchData();
  }, [id]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     slug: "single-basic",
  //     defaultBcg,
  //   };
  // }
  /***********TOOGLE BUTTON FOR SHOWING THE TICKET******************** */
  // const targetDiv = document.getElementById("third");
  // const btn = document.getElementById("toggle");
  // btn.onclick = btn.onclick = function () {
  //   if (targetDiv.style.display !== "none") {
  //     targetDiv.style.display = "none";
  //   } else {
  //     targetDiv.style.display = "block";
  //   }
  // };

  // static contextType = EventContext;
  const [img, setImages] = useState("");

  const [formData, setFormData] = useState({
    Name_Event: "",
    idTicket: 1,
    Participant_Name: "adam",
    // Sexe: "",
    Price: 0,
    Date_Debut: "",
    Date_Fin: "",
    Localisation: "",
    img: "uifoiheofo",
    seat: "A7",
  });
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    let f = files[0];
    formData.append("file", f);
    //save the Image we chose inside the Node Server
    Axios.post(
      "http://localhost:5000/api/articles/uploadImage",
      formData,
      config
    ).then((response) => {
      if (response.data.success) {
        setImages(response.data.fileName);
      } else {
        alert("Failed to save the Image in Server");
      }
      console.log(response);
    });
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeFile = (e) => {
    setFormData({ ...formData, img: e.target.files[0].name });
  };
  const validate = () => {
    const errors = {};
    return errors;
  };
  useEffect(async () => {
    console.log(formErrors);
    console.log(isSubmit);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const [res, err] = await queryApi(
        "bookings/newBooking",
        formData,
        "POST",
        false
      );
      if (err) {
        setFormErrors({
          visibile: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      }
      // history.push("/products");
      else console.log("yes");
      // history.push("/articles")
      // window.location.href = "/events";
    }
  }, [formErrors]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    // formData.Title = Title;
    formData.img = img;
    console.log(formData);
    console.log("formerr:");
    console.log(formErrors);

    console.log(Object.keys(formErrors).length);
  };
  console.log("dsasda");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  {
    formData.img = "mmm";
  }
  {
    formData.idTicket = 1;
  }
  {
    formData.Participant_Name = "adam";
  }
  {
    formData.Price = 90;
  }
  return (
    // const { getEvent } = this.context;
    // const event = getEvent(this.state.slug);
    // const { startDate, endDate } = this.state;
    // if (!event) {
    //   return (
    //     <div className="Container eventerror">
    //       <div className="row my-5">
    //         <div className="col-md-6 col-12 mx-auto">
    //           <div className="card shadow-lg border-0 p-4 error">
    //             <h1 className="text-center display-4">SORRY</h1>
    //             <h3>No such event could be found...</h3>
    //             <Link to="/events" className="btn btn-warning mt-4 ">
    //               Back to Events
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    // const { name, capacity, price, images } = event;
    // const [mainImg, ...defaultBcg] = images;
    <>
      {toRender ? (
        <>
          <div className="">
            <div class="Container">
              <div class="cover"></div>

              <div class="content">
                <form onSubmit={handleSubmit}>
                  {/* <h1 className="display-4">Booking</h1> */}
                  <img
                    src={`http://localhost:5000/uploads/${toRender.img}`}
                    className="img-fluid"
                    alt="selected event"
                  />
                  <div class="black-label">
                    <h1>Event Name</h1>
                    <td value={(formData.Name_Event = toRender.Title)}>
                      <span class="title">{toRender.Title}</span>
                    </td>
                  </div>
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Event description</th>
                        <td>{toRender.Description}</td>
                      </tr>

                      <tr>
                        <th>Localisation</th>
                        <td
                          value={
                            (formData.Localisation = toRender.Localisation)
                          }
                        >
                          {toRender.Localisation}
                        </td>
                      </tr>
                      <tr>
                        <th>Date_Debut</th>
                        <td value={(formData.Date_Debut = toRender.Date_Debut)}>
                          {toRender.Date_Debut}
                        </td>
                      </tr>
                      <tr>
                        <th>Date_fin</th>
                        <td value={(formData.Date_Fin = toRender.Date_Fin)}>
                          {toRender.Date_Fin}
                        </td>
                      </tr>
                    </thead>
                  </table>
                  <div>
                    <button
                      className="Btn-primary float-right "
                      onClick={() => {
                        setiteam(false);
                        console.log(Iteam);
                        console.log(formData);
                        console.log(formData.img);
                      }}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
                <div>
                  <h3>
                    <div>
                      <Link to="/events" className="Btn-primary float-right ">
                        Goto Home
                      </Link>
                    </div>
                    <br />
                    <br />

                    <div hidden={Iteam}>
                      <Link
                        to={`/TicketBooking/${formData.idTicket}`}
                        className="Btn-primary float-right "
                      >
                        Go to your ticket
                      </Link>
                    </div>
                  </h3>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
              </div>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          </div>
        </>
      ) : (
        <p>DEtails Event not found </p>
      )}
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { memo } from "react";
import { queryApi } from "../../../utils/queryApi";
import { Link as LinkS } from "react-scroll";
import { ReactToPrint, useReactToPrint } from "react-to-print";
// import { QRCode } from "qrcode";
import { Link, useParams } from "react-router-dom";
// import { PDF417 } from "pdf417-generator";
import styled from "styled-components";
import "../pages/ticket.css";

var ReactDOM = require("react-dom");
var Barcode = require("react-barcode");

// const BarcodeCanvas = styled.canvas`
//   width: 100%;
// `;
// const CanvasContainer = styled.div`
//   width: 150px;
//   border-radius: 3px;
//   padding: px;
//   background-color: #fff;
// `;

export default function TicketBooking(props) {
  const { id } = useParams();
  const [toRender, setToRender] = useState(null);
  const [o, setO] = useState(null);

  async function dodo() {
    setO(document.forms.form.x.value);
    console.time(9000);
    console.log("dodo");

    console.log(o);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };

  async function fetchData() {
    console.log("aaaaaaa");

    const [res, err] = await queryApi("bookings/BookingId/" + id);
    console.log(res);
    setFormData({
      _id: res._id,
      Name_Event: res.Name_Event,
      idTicket: res.idTicket,
      Participant_Name: res.Participant_Name,
      // Sexe: "",
      Price: res.Price,
      Date_Debut: res.Date_Debut,
      Date_Fin: res.Date_Din,
      NbInvestisseurs: res.NbInvestisseurs,
      Localisation: res.Localisation,
      img: res.img,
      seat: "davai",
    });
    setToRender(res);

    console.log(id);
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  //PDF
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //QRCode
  // const text = "ahmed";
  // const [src, serSrc] = useState("");
  // useEffect(() => {
  //   QRCode.toDataURL(text).then(serSrc);
  // }, []);

  //BarCode

  // const canvas = useRef(null);
  // const value = "GREPSOFT";
  // useEffect(() => {
  //   if (canvas.current) {
  //     PDF417.draw(value, canvas.current, 3);
  //     PDF417.draw(value, canvas.current, 3);
  //   }
  // }, [canvas, value]);
  const [formData2, setFormData2] = useState({
    seat: "",
  });
  const [formData, setFormData] = useState({
    Name_Event: "",
    idTicket: "",
    Participant_Name: "",
    // Sexe: "",
    Price: "",
    Date_Debut: 0,
    Date_Fin: 0,
    NbInvestisseurs: 0,
    Localisation: "",
    img: "",
    seat: "456",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onChangeFile = (e) => {
    setFormData({ ...formData });
  };

  useEffect(async () => {
    console.log(formErrors);
    console.log(isSubmit);
    formData2.seat = document.forms.form.x.value;
    if (isSubmit) {
      const [, err] = await queryApi(
        "bookings/updateBooking/" + formData._id,
        formData2,
        "PUT",
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
  }, [isSubmit]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormErrors(validate());
    setIsSubmit(true);
    // formData.Title = Title;
    // formData.Img = Img;
    console.log(formData);
    console.log("formerr:");
    console.log(formErrors);

    console.log(Object.keys(formErrors).length);
  };
  console.log("dsasda");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {toRender ? (
        <>
          <div class="cardWrapticket" ref={componentRef}>
            <div class="cardticket cardLeftticket">
              <h1>
                Startup <span>FireUp</span>
              </h1>
              <div class="titleticket">
                <h2>{toRender.Name_Event}</h2>
              </div>
              <tr>
                <td>
                  <div class="nameticket">
                    <h2>{toRender.Participant_Name}</h2>
                    <span>name</span>
                  </div>
                </td>
                <td>
                  <div class="nameticket">
                    <h2>{toRender.Date_Debut}</h2>
                    <span>Begins At</span>
                  </div>
                </td>
                <td>
                  <div class="nameticket">
                    <h2>{toRender.Date_Fin}</h2>
                    <span>Ends At </span>
                  </div>
                </td>
                <td>
                  <div class="nameticket">
                    <h2>{toRender.Localisation}</h2>
                    <span>Location</span>
                  </div>
                </td>
              </tr>
            </div>
            <div class="cardticket cardRightticket">
              <div class="eyeticket"></div>
              <div class="numberticket">
                <h3 value={formData.seat} onChange={(e) => onChange(e)}>
                  {o}
                </h3>
                <span>seat</span>
              </div>
              <Barcode value={o} />,
              {/* <div class="barcodeticket" ref={canvas}></div> */}
            </div>
          </div>
          <button onClick={handlePrint} className="button">
            Print
          </button>
          <div
            class="form-container sign-in-container"
            className="ticket-booking"
          >
            <form
              onSubmit={handleSubmit}
              name="form"
              className="seat-pick"
              style={{ background: "#f6f5f7", marginTop: "32%" }}
            >
              {/* <h1 className="title">Pick Ceats</h1>
              <span className="sub-title">One Ticket Cost : 500</span>
             
              <Link to="/" className="btn btn-dark">
                Goto Home
              </Link>
              <br /> */}
              {/* <div className="inputForm">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Number Of Ceats"
            value={ceats}
            onChange={(e) => setceats(e.target.value)}
          />
          <input
            type="button"
            value="Pick Cetas"
            className="pick-ceats"
            onClick={startSelect}
          />
         </div> */}

              <div class="seatStructure" style={{ marginTop: "30em" }}>
                <center>
                  <p id="notification"></p>
                  <table id="seatsBlock" style={{ marginLeft: "5em" }}>
                    <tr>
                      <td colSpan="14">
                        <div
                          class="screen"
                          style={{
                            width: "35em",
                            height: "25px",
                            background: "#ff4b2b",
                            color: "#fff",
                            lineHeight: "20px",
                            fontSize: "15px",
                          }}
                        >
                          SCREEN
                        </div>
                      </td>
                      <td rowSpan="20">
                        <div
                          class="smallBox greenBox"
                          style={{ width: "max-content" }}
                        >
                          {" "}
                          Selected Seat
                        </div>{" "}
                        <br />
                        <div
                          class="smallBox redBox"
                          style={{ width: "max-content" }}
                        >
                          {" "}
                          Reserved Seat
                        </div>
                        <br />
                        <div
                          class="smallBox emptyBox"
                          style={{ width: "max-content" }}
                        >
                          {" "}
                          Empty Seat
                        </div>
                        <br />
                      </td>

                      <br />
                    </tr>
                    <tr>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>12</td>
                    </tr>
                    <tr type="RadioButton">
                      <td>A</td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A1"
                          id="A1"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A2"
                          id="A2"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A3"
                          id="A3"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A4"
                          id="A4"
                        />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="A5" />
                      </td>
                      <td class="seatGap"></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="A6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="A7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="A8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="A9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="A12"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="B9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="B10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="B11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="B12"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="C9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="C10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="C11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="C12"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="D9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="D10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="D11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="D12"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>E</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="E9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="E10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="E11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="E12"
                        />
                      </td>
                    </tr>
                    <tr class="seatVGap"></tr>
                    <tr>
                      <td>F</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="F9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="F10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="F11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="F12"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>G</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="G9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="G10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="G11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="G12"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>H</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="H9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="H10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="H11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="H12"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>I</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="I9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="I10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="I11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="I12"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>J</td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J1" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J2" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J3" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J4" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J5" />
                      </td>
                      <td></td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J6" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J7" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J8" />
                      </td>
                      <td>
                        <input name="x" type="radio" class="seats" value="J9" />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="J10"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="J11"
                        />
                      </td>
                      <td>
                        <input
                          name="x"
                          type="radio"
                          class="seats"
                          value="J12"
                        />
                      </td>
                    </tr>
                  </table>

                  <br />
                  <div></div>
                  {/* <input
              type="button"
              value="Confirm Selection"
              className="confirm-selection"
              id="con-select"
              onClick={confirmSelection}
              onclick="updateTextArea()"
            /> */}
                </center>
              </div>
              <br />
              <br />
              {/* <div class="displayerBoxes">
                <center>
                  <table
                    class="Displaytable"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  >
                    <tr>
                      <th>Name</th>
                      <th>Number of Seats</th>
                      <th>Seats</th>
                    </tr>
                    <tr>
                      <td>
                        <textarea id="nameDisplay"></textarea>
                      </td>
                      <td>
                        <textarea id="NumberDisplay"></textarea>
                      </td>
                      <td>
                        <textarea id="seatsDisplay"></textarea>
                      </td>
                    </tr>
                  </table>
                </center>
              </div> */}
              <button
                type="submit"
                className="button envoyerevent"
                onClick={() => dodo()}
              >
                Envoyer
              </button>
            </form>

            <br />

            {/* <button
        className="pay-btn"
        style={{ marginLeft: "39%" }}
        onClick={paymentFunction}
      >
        Pay Now
      </button> */}
          </div>
        </>
      ) : (
        <p>DEtails Event not found </p>
      )}
    </>
  );
}

import React, { Component } from "react";
import { EventContext } from "../context";
import { Link } from "react-router-dom";
import moment from "moment";

import "../booknow.css";

import defaultBcg from "../images/room-3.jpeg";
export default class BookNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: "single-basic",
      defaultBcg,
    };
  }

  static contextType = EventContext;
  render() {
    const { getEvent } = this.context;
    const event = getEvent(this.state.slug);
    const { startDate, endDate } = this.state;
    if (!event) {
      return (
        <div className="Container eventerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">SORRY</h1>
                <h3>No such event could be found...</h3>
                <Link to="/events" className="btn btn-warning mt-4 ">
                  Back to Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { name, capacity, price, images } = event;
    const [mainImg, ...defaultBcg] = images;
    return (
      <div className="">
        <div class="Container">
          <div class="cover"></div>
          <div class="content">
            {/* <h1 className="display-4">Booking</h1> */}

            <img
              src={mainImg || defaultBcg}
              className="img-fluid"
              alt="selected event"
            />
            <div class="black-label">
              <span class="title"><h1>Event Details</h1></span>
            </div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Event Type</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <br></br>
                </tr>
                <tr>
                  <th>Capacity</th>
                  <td>{capacity}</td>
                </tr>
              </thead>
            </table>

            <div class="prix">
              <h6 className="font-weight-bold">
                Price of the ticket :{" "}
                <span className="badge badge-info"> {price} eth </span>
              </h6>
              <h6 className="font-weight-bold">
                Total Price to be paid :{" "}
                {/* <span className="text-primary">{daysLeft * price} eth</span> */}
                <span className="text-primary">{price} eth</span>
              </h6>
            </div>

            {/* <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="payment" className="font-weight-bolder">
                    Payment Options
                  </label>
                  <select className="form-control">
                    <option disabled>Select payment option</option>
                    <option value="Credit">Credit Card</option>
                    <option value="Debit">Debit Card</option>
                    <option value="checkin">Pay during Checkin</option>
                  </select>
                </div>
              </div> */}
            {/* <div className="col-md-6 col-12 my-auto">
                <div className="col-md-6 col-12 float-right">
                  <button
                    className="btn btn-block btn-outline-primary"
                    data-toggle="modal"
                    data-target="#thanks"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div> */}
            <div >
              <h3>
                <Link to="/" className="Btn-primary float-right ">
                  Goto Home
                </Link>
                <br />
                <br />
                <Link to="/TicketBooking" className="Btn-primary float-right ">
                  Go to your ticket
                </Link>
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
      </div>
    );
  }
}

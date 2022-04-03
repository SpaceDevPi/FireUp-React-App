import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "../pages/ticket.css";

const TicketBooking = memo(({ ticketBooking }) => {
  return (
    <div class="cardWrap">
      <div class="card cardLeft">
        <h1>
          Startup <span>FireUp</span>
        </h1>
        <div class="title">
          <h2>First Event</h2>
        </div>
        <tr>
          <td>
            <div class="name">
              <h2>Karoui Ahmed</h2>
              <span>name</span>
            </div>
          </td>
          <td>
            <div class="name">
              <h2>10:00</h2>
              <span>Begins At</span>
            </div>
          </td>
          <td>
            <div class="name">
              <h2>12:00</h2>
              <span>Ends At </span>
            </div>
          </td>
          <td>
            <div class="name">
              <h2>156</h2>
              <span>seat</span>
            </div>
          </td>
        </tr>
      </div>
      <div class="card cardRight">
        <div class="eye"></div>
        <div class="number">
          <h3>156</h3>
          <span>seat</span>
        </div>
        <div class="barcode"></div>
      </div>
    </div>
  );
});
export default TicketBooking;

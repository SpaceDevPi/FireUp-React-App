import React from "react";
import Event from "./Event";
const EventsList = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no events matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="eventslist">
      <div className="eventslist-center">
        {events.map((item) => {
          return <Event key={item.id} event={item} />;
        })}
      </div>
    </section>
  );
};

export default EventsList;

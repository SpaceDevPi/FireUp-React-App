import React, { useEffect, useState } from "react";
import Event from "./Event";
import { queryApi } from "../../../utils/queryApi";
const EventsList = ({ events }) => {
  const [Events, setEvents] = useState(null);

  async function fetchData() {
    // console.log("aaaaaaa");

    const [res, err] = await queryApi("events");
    setEvents(res);
  }
  useEffect(() => {
    fetchData();
  }, []);

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
        {Events ? (
          Events.map((item) => {
            return <Event key={item.id} event={item} />;
          })
        ) : (
          <h1> Events not found </h1>
        )}
      </div>
    </section>
  );
};

export default EventsList;

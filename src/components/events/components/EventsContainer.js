import React from "react";
import { withEventConsumer } from "../context";
import Loading from "./Loading";
// import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";

function EventContainer({ context }) {
  const { loading, sortedEvents, events } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* <EventsFilter events={events} /> */}
      <EventsList events={sortedEvents} />
    </>
  );
}

export default withEventConsumer(EventContainer);
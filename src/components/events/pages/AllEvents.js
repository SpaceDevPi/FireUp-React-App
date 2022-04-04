import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import EventsContainer from "../components/EventsContainer";

const Events = () => {
  return (
    <>
      <Hero hero="eventsHero">
        <Banner title="Events">
          <Link to="/HomeEvent" className="Btn-primary">
            ReturnHome
          </Link>
        </Banner>
      </Hero>
      <EventsContainer />
    </>
  );
};

export default Events;

import React from "react";
import Hero from "../components/events/components/Hero";

import Banner from "../components/events/components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/events/components/Services";
import FeaturedEvents from "../components/events/components/FeaturedEvents";

const Event = () => {
  return (
    <>
      <Hero>
        <Banner title="Events That Might Interest YOU" subtitle="New Events">
          <Link to="/events" className="btn-primary">
            Our Events
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedEvents />
    </>
  );
}

export default Event


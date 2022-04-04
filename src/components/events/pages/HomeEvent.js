import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedEvents from "../components/FeaturedEvents";
export default function HomeEvent() {
  return (
    <>
      <Hero>
        <Banner title="Events That Might Interest YOU" subtitle="New Events">
          <Link to="/events" className="Btn-primary">
            Our Events
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedEvents />
    </>
  );
}

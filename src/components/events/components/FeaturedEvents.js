import React, { Component } from "react";
import Title from "./Title";
import { EventContext } from "../context";
import Event from "./Event";
// import Loading from "./Loading";
export default class FeaturedEvents extends Component {
  static contextType = EventContext;

  render() {
    // let {  featuredEvents: events } = this.context;

    // events = events.map((event) => {
    //   return <Event key={event.id} event={event} />;
    // });
    return (
      <div>
        test
      </div>
      // <section className="featured-events">
      //   <Title title="featured events" />
      //   <div className="featured-events-center">
      //     {/* {loading ? <Loading /> : events} */}
      //   </div>
      // </section>
    );
  }
}

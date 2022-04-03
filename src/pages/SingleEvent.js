import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { EventContext } from "../context";

import StyledHero from "../components/StyledHero";

export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = EventContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getEvent } = this.context;
    const event = getEvent(this.state.slug);

    if (!event) {
      return (
        <div className="error">
          <h3> no such event could be found...</h3>
          <Link to="/events" className="btn-primary">
            back to events
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,

      price,
      extras,

      images,
    } = event;
    const [...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} event`}>
            <Link to="/events" className="btn-primary">
              back to events
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-event">
          <div className="single-event-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-event-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : {price} E</h6>

              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} places` : `${capacity} places`}
              </h6>
            </article>
          </div>
        </section>
        <section className="event-extras">
          {/* <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul> */}

          <div className="p-4 clearfix">
            <div className="row">
              <div className="col-md-3 col-12 ml-auto">
                <Link
                  to={`/booknow/${this.state.slug}`}
                  className="btn-primary float-right "
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

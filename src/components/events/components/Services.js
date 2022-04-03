import React, { Component } from "react";
import { FaHandsHelping, FaMoneyBill, FaRProject } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHandsHelping />,
        title: "Coaches",
        info: "rtyuiokjbvfgyuiolknbvgyuiolknbgyuiok,nbgyuil,nbhuiolnh",
      },
      {
        icon: <FaMoneyBill />,
        title: "investors",
        info: "rtyuiokjbvfgyuiolknbvgyuiolknbgyuiok,nbgyuil,nbhuiolnh",
      },
      {
        icon: <FaRProject />,
        title: "Entrepreneurs",
        info: "rtyuiokjbvfgyuiolknbvgyuiolknbgyuiok,nbgyuil,nbhuiolnh",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

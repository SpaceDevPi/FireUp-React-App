import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/details-11.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
import styled from "styled-components";
// import { useApi } from "../../../hooks/";
// import { queryApi } from "../../../queryApi";
import { queryApi } from "../../../utils/queryApi";

const Event = memo(({ event }) => {
  // const { name, slug, images, price } = event;
  const [events, setEvents] = useState(null);
  const [FiltreCategory, setFiltreCategory] = useState(null);
  const [conditionFiltre, setconditionFiltre] = useState(false);
  const { Title, _id } = event;
  const FilterByCategory = async () => {
    var categories = document.getElementById("categories").value;

    setFiltreCategory(categories);

    if (categories == "categories") {
      const [res, err] = await queryApi("getEventsByCategories/");
      setEvents(res);
      setFiltreCategory(null);
      setconditionFiltre(false);
    } else {
      const [res, err] = await queryApi("getEventsByCategories/" + categories);
      setEvents(res);
      setconditionFiltre(true);
    }
  };
  // console.log(name);
  return (
    <div>
      <article className="event">
        <div className="img-container">
          <img src={defaultImg} alt="single event" />
          <div className="price-top">
            <h6>${Title}</h6>
            {/* <p>The ticket</p> */}
          </div>
          <Link to={`/events/${_id}`} className="Btn-primary event-link">
            features
          </Link>
        </div>
        <p className="event-info">${Title}</p>
      </article>
    </div>
  );
});

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

export default Event;

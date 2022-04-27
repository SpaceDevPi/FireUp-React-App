import React, { useEffect, useState } from "react";
import Event from "./Event";
import styled from "styled-components";

import { queryApi } from "../../../utils/queryApi";
const EventsList = ({ events }) => {
  const [Events, setEvents] = useState(null);
  const [FiltreCategory, setFiltreCategory] = useState(null);
  const [conditionFiltre, setconditionFiltre] = useState(false);
  // const { Title, _id } = event;
  const FilterByCategory = async () => {
    var categories = document.getElementById("selectCat").value;

    setFiltreCategory(categories);

    if (categories == "Category") {
      const [res, err] = await queryApi("events");
      setEvents(res);
      setFiltreCategory(null);
      setconditionFiltre(false);
    } else {
      const [res, err] = await queryApi(
        "events/getEventsByCategories/" + categories
      );
      setEvents(res);
      setconditionFiltre(true);
    }
  };

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
      <Filter>
        <FilterText>Filter Projects:</FilterText>
        <Select id="selectCat" onClick={() => FilterByCategory()}>
          <Option selected>Category</Option>
          <Option>Agriculture</Option>
          <Option>Art</Option>
          <Option>Buisness to Buisness </Option>
          <Option>Design</Option>
          <Option>E-commerce</Option>
          <Option>Engineering</Option>
          <Option>Technology</Option>
        </Select>
      </Filter>
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
export default EventsList;

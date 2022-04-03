import React, { Component } from "react";
import items from "./data";

const EventContext = React.createContext();

export default class EventProvider extends Component {
  state = {
    events: [],
    sortedEvents: [],
    featuredEvents: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // this.getData();
    let events = this.formatData(items);
    let featuredEvents = events.filter((event) => event.featured === true);
    //
    let maxPrice = Math.max(...events.map((item) => item.price));
    let maxSize = Math.max(...events.map((item) => item.size));
    this.setState({
      events,
      featuredEvents,
      sortedEvents: events,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let event = { ...item.fields, images, id };
      return event;
    });
    return tempItems;
  }
  getEvent = (slug) => {
    let tempEvents = [...this.state.events];
    const event = tempEvents.find((event) => event.slug === slug);
    return event;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterEvents
    );
  };
  filterEvents = () => {
    let { events, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;

    let tempEvents = [...events];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempEvents = tempEvents.filter((event) => event.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempEvents = tempEvents.filter((event) => event.capacity >= capacity);
    }
    // filter by price
    tempEvents = tempEvents.filter((event) => event.price <= price);
    //filter by size
    tempEvents = tempEvents.filter(
      (event) => event.size >= minSize && event.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempEvents = tempEvents.filter((event) => event.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempEvents = tempEvents.filter((event) => event.pets === true);
    }
    this.setState({
      sortedEvents: tempEvents,
    });
  };
  render() {
    return (
      <EventContext.Provider
        value={{
          ...this.state,
          getEvent: this.getEvent,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}
const EventConsumer = EventContext.Consumer;

export { EventProvider, EventConsumer, EventContext };

export function withEventConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <EventConsumer>
        {(value) => <Component {...props} context={value} />}
      </EventConsumer>
    );
  };
}

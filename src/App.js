import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Events from "./pages/AllEvents";
import SingleEvent from "./pages/SingleEvent";
import BookNow from "./pages/BookNow";
import TicketBooking from "./pages/TicketBooking";
// import PeekSeat from "./pages/PeekSeat";
import Error from "./pages/Error";

import { Route, Switch, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:slug" component={SingleEvent} />
        <Route exact path="/BookNow/:slug" component={BookNow} />
        <Route exact path="/TicketBooking" component={TicketBooking} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

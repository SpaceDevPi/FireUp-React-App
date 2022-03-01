import React from "react";
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
// import Explore from "../pages/Explore";
// import About from "../pages/About";
// import Event from "../pages/Event";
// import Blog from "../pages/Blog";
// import NotFoundPage from "../pages/NotFoundPage";


function App() {
  return (
    <Router>
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;

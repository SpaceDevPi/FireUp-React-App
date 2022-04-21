import React from "react";
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import  { Suspense,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "../pages/Index";
import { useState } from "react";
import { AppContext, socket } from "../context/appContext";
import { useDispatch } from "react-redux";
import { fetchOffers } from "../redux/slices/offersSlice";





function App() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState([]);
  const [newMessages, setNewMessages] = useState([]);

  console.log("taa")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <AppContext.Provider value={{socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages}}>
      <Router>
        <Index />
        
      </Router>
      </AppContext.Provider>

  );
}

export default App;

import React from "react";
import './App.css';


import { Navigate, Route, Routes } from 'react-router-dom';
 import Index from "../pages/Index";
import  { Suspense,useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchOffers } from "../redux/slices/offersSlice";


function App() {
  console.log("taa")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);
  return (
        
    <Index/>
  );
}

export default App;

import React from "react";
import './App.css';


import { Navigate, Route, Routes } from 'react-router-dom';
 import Index from "../pages/Index";
import  { Suspense,useEffect } from "react";
import Offerlist from '../pages/Offerlist';
import Offer from '../pages/Offer';
import Offertickets from '../pages/Offertickets';
import { useDispatch } from "react-redux";
import { fetchOffers } from "../redux/slices/offersSlice";


function App() {
  console.log("taa")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);
  return (
    
    // <Routes>
    // <Route path='/' exact element={<Offerlist/>} />
    // <Route path='/offer/:id' exact element={<Offer/>} />
    // <Route path='/Offertickets/:id' exact element={<Offertickets/>} />  
    // {/* <Route path='/blog/:id' component={Blog} /> */}
    // <Route path="/*" element={<Navigate replace to="/" />} />
    // </Routes>
        
    <Index/>
  );
}

export default App;

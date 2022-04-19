import React from 'react'
import    Transactions  from "./components/Transactions";
import   Welcome  from "./components/Welcome";



const Blockchain = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Transactions />
  </div>
  )
}


export default Blockchain;

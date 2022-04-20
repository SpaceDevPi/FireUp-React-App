import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import  Loader  from "./Loader";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="inputEther"
    />
  );
const Welcome = () => {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
      const { addressTo, amount, keyword, message } = formData;
  
      e.preventDefault();
  
      if (!addressTo || !amount || !keyword || !message) return;
  
      sendTransaction();
    };
  return (
    <div className="WelcomeBlock1">
         {!currentAccount && (
            <button
              type="button"
               onClick={connectWallet}
              className="buttonConnect"
            >
              <AiFillPlayCircle  />
              <p >
                Connect Wallet
              </p>
            </button>
          )} 
     <div className="firstEtherCompo">
        <div className="CompteBlock">
        <div className="eth-card ">
            <div >
              <div >
                <div >
                </div>
                <BsInfoCircle fontSize={25} color="#fff" className="infoether"/>
              </div>
              <div>
               
                <p className="text-ether">
                <SiEthereum fontSize={25} color="#fff" />
                Ethereum <br/>
                {shortenAddress(currentAccount)}

                
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="ContainerFormEther">
        <div >
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div  />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="buttonEther"
                >
                  Send now
                </button>
              )}
          </div>
          </div>
          <div className="CompteBlock2">
              <div>
                <div className="serviceEther">
                
                <h1><BsShieldFillCheck fontSize={21} />Security gurantee</h1>
                </div>
                <div className="serviceEther">
                
                <h1><AiFillLike fontSize={21}  />Best exchange rates</h1>
                </div>
                <div className="serviceEther">
                
                <h1><AiFillThunderbolt fontSize={21}  />Fastest transactions</h1>
                </div>
                </div>
            </div>
          </div>

    </div>
  )
}
export default Welcome ; 

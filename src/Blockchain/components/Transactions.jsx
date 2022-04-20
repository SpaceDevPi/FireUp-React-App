import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";




const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    // const gifUrl = useFetch({ keyword });
  
    return (
      <div className="transactionBlock"
      >
        <div >
          <div >
            <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
              <p >From: {shortenAddress(addressFrom)}</p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
              <p >To: {shortenAddress(addressTo)}</p>
            </a>
            <p >Amount: {amount} ETH</p>
            {message && (
              <>
                <br />
                <p >Message: {message}</p>
              </>
            )}
          </div>
         
          <div >
            <p >{timestamp}</p>
          </div>
        </div>
      </div>
    );
  };



const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="transactionsbloc">
    <div >
      {currentAccount ? (
        <h3 >
          Latest Transactions
        </h3>
      ) : (
        <h3 >
          Connect your account to see the latest transactions
        </h3>
      )}
       <div className="transactions" >
          {[ ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard  key={i} {...transaction} />
          ))}
        </div>
      </div>
      </div>
        )
}
export default Transactions ; 
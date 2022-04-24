import { useEffect } from 'react'
// import useMetaMask from "../../../hooks/metamask";
import { Button } from 'react-bootstrap'
import './card.css'

function WalletCard (){
  // const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

    return (
        <div className="wallet-card card">
            <div className="card-header">
                  <h3>My wallet</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h4>Balance</h4>
                      <h1>$0</h1>
                      {/* <Button variant="secondary" onClick={connect} disabled={shouldDisable}>
                        Connect to MetaMask
                      </Button>
                      <div className="mt-2 mb-2">
                        Connected Account: { isActive ? account : '' }
                      </div>
                      <Button variant="danger" onClick={disconnect}>
                        Disconnect MetaMask
                      </Button> */}
                    </div>
                  </div>
                </div>
        </div>
    );
}

export default WalletCard;
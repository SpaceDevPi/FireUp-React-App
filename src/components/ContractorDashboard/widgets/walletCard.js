

function WalletCard (){
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
                    </div>
                  </div>
                </div>
        </div>
    );
}

export default WalletCard;
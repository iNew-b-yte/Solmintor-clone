import React, { useState } from 'react';

function Button() {

  const [isConnected, setConnect ] = useState(false);


function account() {
  window.solana.connect();
  window.solana.request({method:"connect"});
  window.solana.on("connect",()=>setConnect(true));
}


  return <div className="btn-container">

   
  <div className='btn  btn-lg mybtn mybtn2' onClick={account} >{!isConnected? "CONNECT WALLET" : "CONNECTED" }</div>

  <div className='btn  btn-lg mybtn2'>Token Management</div>

  <div className='btn  btn-lg mybtn2'>Apply for IDO</div>

  <div className='btn  btn-lg mybtn2'>NFT</div>

  <div className='btn  btn-lg mybtn2'>Documentation</div>
  

  </div>;
}

export default Button;

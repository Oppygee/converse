import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [cryptoAmount, setCryptoAmount] = useState(0); // Example amount in BTC
  const [usdAmount, setUsdAmount] = useState(0);
  const [appreciation, setAppreciation] = useState(0);
  const [showWalletAddress, setShowWalletAddress] = useState(false);

  // useEffect(() => {
  //   // Simulate fetching crypto prices
  //   const fetchCryptoPrice = async () => {
  //     const btcPrice = 30000; // Example BTC price in USD
  //     const initialBtcPrice = 25000; // Example initial BTC price in USD

  //     const currentUsdAmount = cryptoAmount * btcPrice;
  //     const initialUsdAmount = cryptoAmount * initialBtcPrice;

  //     setUsdAmount(currentUsdAmount);
  //     setAppreciation(((currentUsdAmount - initialUsdAmount) / initialUsdAmount) * 100);
  //   };

  //   fetchCryptoPrice();
  // }, [cryptoAmount]);

  const handleDepositClick = () => {
    setShowWalletAddress(true);
  };

  const handleWithdrawalClick = () => {
    setShowWalletAddress(false);
    alert("Withdrawal process initiated.");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: "url('/crypto-logos.jpg')" }}>
      <div className="absolute top-4 left-6 text-2xl font-bold">Coinverse</div>
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-4xl">
        {/* <h2 className="text-4xl font-bold mb-8 text-center">Crypto Dashboard</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4">Crypto Amount</h3>
            <p className="text-xl">{cryptoAmount} BTC</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4">Equivalent in USD</h3>
            <p className="text-xl">${usdAmount.toFixed(2)}</p>
          </div>
          <div className="col-span-1 sm:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4">Performance</h3>
            <p className={`text-3xl ${appreciation >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {appreciation >= 0 ? 'Appreciation' : 'Depreciation'}: {appreciation.toFixed(2)}%
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
            <button
             
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleDepositClick}
            >
              Deposit
            </button>
            {showWalletAddress && (
              <p className="text-xl mb-4">Wallet Address: 15ow1b17vf7NirzGZ9EMEoPCQofzj42iD7</p>
            )}
            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleWithdrawalClick}
            >
              Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

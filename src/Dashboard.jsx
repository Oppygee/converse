import React, { useState, useEffect } from "react";

const Dashboard = () => {
  // Set initial states based on the provided details
  const [cryptoAmount, setCryptoAmount] = useState(0.0033); // Amount in BTC
  const [usdAmount, setUsdAmount] = useState(200); // Equivalent in USD
  const [appreciation, setAppreciation] = useState(3); // Appreciation in %

  const [showWalletAddress, setShowWalletAddress] = useState(false);

  // Adjust this effect to match the provided static values
  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const btcPrice = 100030; // Replace with real API fetch in a production application
        const initialBtcPrice = 56920; // Replace with initial price if needed

        const currentUsdAmount = cryptoAmount * btcPrice;
        const initialUsdAmount = cryptoAmount * initialBtcPrice;

        setUsdAmount(currentUsdAmount);
        setAppreciation(
          ((currentUsdAmount - initialUsdAmount) / initialUsdAmount) * 100
        );
      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }
    };

    fetchCryptoPrice();
  }, [cryptoAmount]);

  const handleDepositClick = () => {
    setShowWalletAddress(true);
  };

  const handleWithdrawalClick = () => {
    setShowWalletAddress(false);
    alert("Withdrawal process initiated.");
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/crypto-logos.jpg')" }}
    >
      <div className="absolute top-4 left-6 text-2xl font-bold">Coinverse</div>
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4">Crypto Amount</h3>
            <p className="text-xl">{cryptoAmount.toFixed(4)} BTC</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4">Equivalent in USD</h3>
            <p className="text-xl">${usdAmount.toFixed(2)}</p>
          </div>
          <div className="col-span-1 sm:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4">Performance</h3>
            <p
              className={`text-3xl ${
                appreciation >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {appreciation >= 0 ? "Appreciation" : "Depreciation"}:{" "}
              {appreciation.toFixed(2)}%
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
              <p className="text-xl mb-4">
                Wallet Address: 15ow1b17vf7NirzGZ9EMEoPCQofzj42iD7
              </p>
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

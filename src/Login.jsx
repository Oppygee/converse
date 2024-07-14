import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });

  const handleForm = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve the stored signup details from local storage
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Simple authentication check
    if (storedDetails && storedDetails.email === details.email && storedDetails.password === details.password) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://example.com/crypto-background.jpg')" }}>
      <div className="absolute top-4 left-6 text-2xl font-bold">Coinverse</div>
      <div className="bg-opacity-80 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md text-gray-900"
              name='email'
              onChange={handleForm}
              value={details.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md text-gray-900"
              name='password'
              onChange={handleForm}
              value={details.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import { useSelector } from 'react-redux';

const Address = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert('You have purchased this item');
  };

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form action="post" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email Id *
          </label>
          <input
            required
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Mobile Number *
          </label>
          <input
            required
            type="text"
            placeholder="Enter Your Mobile"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Street *
          </label>
          <input
            required
            type="text"
            placeholder="Enter Street"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Society / Village *
          </label>
          <input
            required
            type="text"
            placeholder="Enter Village/ Society"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Pin Code *
          </label>
          <input
            required
            maxLength="6"
            type="text"
            placeholder="Enter Pin Code"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            District *
          </label>
          <input
            maxLength="6"
            type="text"
            placeholder="Enter District"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            State *
          </label>
          <input
            required
            maxLength="6"
            type="text"
            placeholder="Enter State"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-1">
            Card Number *
          </label>
          <input
            required
            type="number"
            maxLength='16'
            placeholder="Enter Card Number"
            inputmode="numeric" // to show numeric keyboard on mobile devices
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            form="none"
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Cancel Payment
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Payment
          </button>
        </div>
      </form>
    </section>
  );
};

export default Address;

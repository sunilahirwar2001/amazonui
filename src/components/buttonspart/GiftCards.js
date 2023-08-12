import React from 'react';

const GiftCards = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
        <h2 className="text-2xl font-semibold mb-4">Gift Cards</h2>
        <p className="text-gray-600 mb-4">
          Perfect for anniversaries, birthdays, weddings, festivals, and more. Send your loved ones a thoughtful gift card and let them choose what they desire.
        </p>
        <div className="border border-gray-300 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Choose a Gift Card Amount</h3>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="25">$25</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
          </select>
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GiftCards;

import React, { useEffect, useState } from 'react';
import { addToCart } from '../../redux/amazonSlice';
import { useDispatch } from 'react-redux';

const TodayDeals = () => {
  const [todayProduct, setTodayProduct] = useState([]);
const dispatch = useDispatch();
  const fetchApi = async () => {
    let data = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
    let result = await data.json();
    setTodayProduct(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Today's Deals</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {todayProduct.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow rounded">
              <img className="w-52 h-64 mx-auto mb-4" src={item.image} alt={item.title} />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.category}</p>
              <p className="text-lg font-semibold mb-2">${item.price}</p>
              <p className="text-gray-600">{item.description.substring(0,100)}</p>
              <button
         onClick={()=>dispatch(addToCart({
          id:item.id,
          title:item.title,
          description:item.description,
          price:item.price,
          image:item.image,

          quantity:1,

         }))}
        className='  font-titleFont font-medium text-base bg-gradient-to-tr
        from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
        border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
        active: from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'>Add to Cart</button>
    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;

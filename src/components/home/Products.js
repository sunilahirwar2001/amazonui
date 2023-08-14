

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import {useLoaderData} from 'react-router-dom'

const Products = ({ searchQuery }) => {
  const searchdata = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data;

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const filteredProducts = productData.filter(
    (product) =>
      searchdata.toLowerCase() === '' ||
      product.category.toLowerCase().includes(searchdata.toLowerCase()) ||
      product.description.toLowerCase().includes(searchdata.toLowerCase()) ||
      product.title.toLowerCase().includes(searchdata.toLowerCase())
  );

  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          className={`bg-white border border-gray-200 p-6 shadow-md ${
            isLargeScreen ? 'hover:shadow-lg transition duration-300' : ''
          }`}
        >
          <div className='relative'>
            <img
              className='w-full h-40 object-cover'
              src={item.thumbnail}
              alt='ProductImg'
            />
            <div className='absolute top-2 right-2 text-gray-500'>
              {item.category}
            </div>
          </div>

          <h2 className='mt-2 text-sm font-medium'>{item.title}</h2>
          <p className='mt-1 text-gray-600 text-sm'>
            {item.description.substring(0, 50)}...
          </p>
          <div className='mt-1 flex items-center text-yellow-500'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className='mt-3 flex justify-between items-center'>
            <p className='text-lg font-bold'>${item.price}</p>
            <button  
                  
                  className='  font-titleFont font-medium text-base bg-gradient-to-tr
                  from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
                  border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
                  active: from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    image: item.thumbnail,
                    quantity: 1,
                  })
                )
              }
            >
       Add to Cart</button>
    
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

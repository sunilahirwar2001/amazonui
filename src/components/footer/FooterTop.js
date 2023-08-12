import React from 'react'
import { Link } from 'react-router-dom';
const FooterTop = () => {
  return (
    <div className="bg-white py-6">
      <div className="border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm">See Personalised recommendations</p>
       
       <Link to ='/signup'>
          <button className="bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
            Sign Up
          </button>
          </Link>

         <Link to='signup'>
          <p className="text-xs mt-1">
            New Customer?{" "}

            <span className="text-blue-600 ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterTop
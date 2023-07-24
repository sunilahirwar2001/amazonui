

import React, { useState } from 'react'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import {logo} from "../../assets/index"
import {filterSearch} from '../../redux/amazonSlice'
import HeaderButton from './HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allItems } from '../../constants';
import SearchBar from '../../searchbar/SearchBar'
import {setSearchTerm} from '../../redux/amazonSlice'

const Header = ({ onSearch }) => {
  const products = useSelector((state) => state.amazonReducer.products);
  const dispatch = useDispatch();
     const [showAll,setShowAll]=useState(false);
     const loginUser = localStorage.getItem('loginUser');
     const [searchQuery, setSearchQuery] = useState('');
     
     const [username,setUsername]=useState( loginUser );

  
    //console.log(products);
    // const handleInputChange = (event) => {
    //   event.preventDefault();
    //   const { value } = event.target;
    //   setSearchQuery(value);
    //   onSearch(value); // Pass the search query to the parent component
    // };
   
  const handleInputChange = (event) => {
    // event.preventDefault();
   
    setSearchQuery(event.target.value);
    
     const { value } = event.target;
      setSearchQuery(value);
      console.log(value);
      onSearch(value); // Pass the search query to the parent component
    //   console.log("hi")

  };


  
  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     handleSearch();
  //   }
  // };
  return (
    <div className='w-full sticky top-0 z-50'>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* ============ Image Start here ================ */}
       
       <Link to='/'>
        <div className="headerHover  hidden mdl:inline-flex">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        </Link>
        {/* ============ Image End here ================== */}
        {/* ============ Deliver Start here ============== */}
        <div className="headerHover">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
            India
            </span>
          </p>
        </div>
        {/* ============ Deliver End here ================ */}
        {/* ============ Search Start here =============== */}
        <div className="h-10 rounded-md hidden lgl:flex flex flex-grow relative">
          <span
           onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
    
         <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"  
             
            // onKeyPress={handleKeyPress}
           //value={searchQuery}
           onChange={handleInputChange} 
        
           
           /> 
         
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon   onClick={()=>dispatch(filterSearch())} />
          </span> 
     
{/*      
      <SearchBar/>  */}
          
        </div>
        {/* ============ Search End here ================= */}
        {/* ============ Signin Start here =============== */}

        <div className="flex flex-col items-start justify-center headerHover">
        <Link to='/signin'>
       <p className="text-sm mdl:text-xs text-white text-lightText font-light">Hello, {username ? username : ( <Link to='/signin'>Sign In</Link> )} </p>
       </Link>
          <p className="text-sm font-semibold -mt-1 text-whiteText hidden md:inline-flex">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
          
      {
          username?<Link to='/logout'  className="text-sm mdl:text-xs text-white text-lightText font-light">Logout</Link>:" "

      }
       
        {/* ============ Signin End here ================= */}
        {/* ============ Orders Start here =============== */}
        <div className=" hidden lgl:flex flex flex-col items-start justify-center headerHover"> 
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ============ Orders End here ================= */}
        {/* ============ Cart Start here ================= */}
      <Link to='/cart'>
      <div className="flex items-start justify-center headerHover relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>
             
             {products.length >0 ? products.length:0}
             
            </span>
          
          </p>
        </div>
      </Link>
        {/* ============ Cart End here =================== */}
       
     
      </div>
     
      <HeaderButton/>
   
    </div>
    
  );
}

export default Header
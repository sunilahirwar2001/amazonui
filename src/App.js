import {React, useState} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import  { productsData } from "./api/api"
// import products from "./api/api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignUp from "./signup/SignUp";
import SignIn from './signin/SignIn'
import Address from './components/payment/Address'
import SearchBar from "./searchbar/SearchBar";
import ViewProduct from './components/viewproduct/ViewProduct'
import Logout from "./signin/Logout";
import Customer from "./components/buttonspart/Customer";
import TodayDeals from "./components/buttonspart/TodayDeals";
import GiftCards from "./components/buttonspart/GiftCards";
import Registry from "./components/buttonspart/Registry";
import Purchased from "./components/payment/Purchased";
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };
  const Layout =()=>{
    return (
      <div>
        <Header onSearch={handleSearch}/>
        {/* <ScrollRestoration/> */}
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route index element={<Home searchQuery={searchQuery} />} loader={productsData}></Route>
      {/* <Route index element={<Home searchQuery={searchQuery} />} loader={products}></Route> */}

     <Route   path="/cart"  element= {<Cart/>} />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/signin" element={<SignIn/>}/>
     <Route path="/payment" element={<Address/>}/>
     <Route  path="/searchbar" element ={<SearchBar/>} />
     <Route   path="/todaydeals" element={<TodayDeals/>} />
     <Route  path = '/customer'  element = {<Customer/>}/>
     <Route  path="/viewproduct"  element={<ViewProduct/>}/>
     <Route  path="/giftcards" element={<GiftCards/>} />
     <Route path="/registry"  element={<Registry/>}/>
     <Route  path="/purchased" element={<Purchased/>} />
     <Route   path="/logout" element={<Logout/>}    />

      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
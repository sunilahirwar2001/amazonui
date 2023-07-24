import {React, useState} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/api";
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
        <ScrollRestoration/>
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route index element={<Home searchQuery={searchQuery} />} loader={productsData}></Route>
     <Route   path="/cart"  element= {<Cart/>} />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/signin" element={<SignIn/>}/>
     <Route path="/payment" element={<Address/>}/>
     <Route  path="/searchbar" element ={<SearchBar/>} />
     <Route  path="/viewproduct"  element={<ViewProduct/>}/>
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
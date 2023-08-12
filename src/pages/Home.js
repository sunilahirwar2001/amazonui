import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
const Home = (searchQuery) => {
  
  return (
    <div>
      <Banner/>
      <div className=' -mt-10 xl:-mt-22 m-36 py-10 '>
    <Products searchQuery={searchQuery}/>
    </div>
    </div>
  )
}

export default Home

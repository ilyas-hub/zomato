import React from 'react'
import Navbar from "../components/Navbars/Navbar"
import Footer from "../components/Footer/Footer"
import Cards from '../components/Cards/Cards'
import Collections from '../components/Collections/Collections'
import Locations from '../components/Locations/Locations'
import GetApp from '../components/GetApp/GetApp'
import Faqs from '../components/Faqs/Faqs'
const Home = () => {
  return (
    <div className='w-full h-full'>
    <Navbar/>
    <div className='lg:w-[75%] w-full px-4 lg:px-0 mx-auto'>
    <Cards></Cards>
    <Collections/>
    <Locations/>
  
    </div>
    <div className='bg-[#FFFBF7]'>

    <GetApp/>
    <Faqs/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
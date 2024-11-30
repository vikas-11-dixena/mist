import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/banner/Banner'
import About from '../About/About'

const Home = () => {
  return (
    <main className='home-page'>
        <div className="container">
            <Navbar />
            <Banner />
            <About />
        </div>
    </main>
  )
}

export default Home

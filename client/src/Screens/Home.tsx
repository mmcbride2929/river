import React from 'react'
import './Home.css'
import ImageContainer from '../components/Home/ImageContainer/ImageContainer'
import TripPanel from '../components/Home/TripPanel/TripPanel'

const Home = () => {
  return (
    <div className='image-container'>
      <ImageContainer />
      <TripPanel />
    </div>
  )
}
export default Home

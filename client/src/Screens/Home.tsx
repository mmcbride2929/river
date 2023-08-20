import './Home.css'
import ImageContainer from '../components/Home/ImageContainer/ImageContainer'
import TripPanel from '../components/Home/TripPanel/TripPanel'
import GameSummary from '../components/Home/GameSummary/GameSummary'
import { useState } from 'react'

const Home = () => {

  const [gameOver, setGameOver] = useState<Boolean>(false)

  return (
    <div className='panel-container'>
      <ImageContainer />
      {!gameOver ? 
      <TripPanel gameOver={gameOver} setGameOver={setGameOver}/> : 
      <GameSummary gameOver={gameOver} setGameOver={setGameOver} />}
    </div>
  )
}
export default Home

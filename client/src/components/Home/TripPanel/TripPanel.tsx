import React from 'react'
import MapDropDown from '../MapDropDown/MapDropDown'
import './TripPanel.css'
import { resetGameSession, updateGameSession } from '../../../slices/eventSlice'
import { useDispatch, useSelector } from 'react-redux'


interface GameStatus {
  gameOver: boolean
  setGameOver: (value: boolean) => void
}

const TripPanel = ({gameOver, setGameOver}: GameStatus) => {

  const dispatch = useDispatch()

  const fishCaught = useSelector((state: RootState) => state.event.fishCaught)
  const largestFish = useSelector((state: RootState) => state.event.largestFish)

  const startGame = (event: React.FormEvent<HTMLFormElement>): void => {
  event.preventDefault()
  generateFishArray()
  setGameOver(!gameOver)
  // biggest fishSize can be determined here

  }

  const generateFishArray = (): void => {
    const fishArray: number[] = new Array()
    let largestFish: number = 0

    const generateFishTotal = (): number => {

      const coin: number = Math.round(Math.random())

      if (coin === 1) {
        return Math.ceil(Math.random() * (5 - 0) + 0)
      } else {
        return 0
      }
    } 

    const generateFishLengths = (): void => {
      const fishTotal = generateFishTotal()
      
      for(let i = 0; i < fishTotal; i++) {
          const length: number = Math.ceil(Math.random() * (36 - 6) + 6) 
          fishArray.push(length)
          
          if (length > largestFish) {
            largestFish = length
          }
      }
    }

    generateFishLengths()
    
    dispatch(updateGameSession({fishCaught : fishArray.length,
        largestFish : largestFish
    }))
     
  }

  return (
    <section className='panel-container'>
    <form onSubmit={startGame}>
      <MapDropDown />
      <button>Start</button>
    </form>
    </section>    
  )
}
export default TripPanel

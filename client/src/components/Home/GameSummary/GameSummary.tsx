import { RootState } from "../../../store"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { resetGameSession } from "../../../slices/eventSlice"

interface GameStatus {
  gameOver: boolean
  setGameOver: (value: boolean) => void
}


const GameSummary = ({gameOver, setGameOver}: GameStatus) => {

  const dispatch = useDispatch()

  const fishCaught = useSelector((state: RootState) => state.event.fishCaught)
  const largestFish = useSelector((state: RootState) => state.event.largestFish)
  const map = useSelector((state: RootState) => state.event.map)

   const resetGame = (): void => {
    dispatch(resetGameSession())
    setGameOver(!gameOver); 
  }

  return (
    <div>
        <div><h1>Location</h1><h1>{map}</h1></div>
        <div><h1>Fish Caught</h1><h1>{fishCaught}</h1></div>
        <div><h1>Largest Fish</h1><h1>{largestFish}</h1></div>
        <button onClick={() => resetGame()}>Close</button>
    </div>
  )
}
export default GameSummary
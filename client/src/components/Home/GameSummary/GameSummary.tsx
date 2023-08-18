import { useState } from "react"

const GameSummary = () => {

    const [ fishCaught, setFishCaught] = useState<Number>(0)

  return (
    <div>
        <div><h1>Fish Caught</h1><h1></h1></div>
    </div>
  )
}
export default GameSummary
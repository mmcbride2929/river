import MapDropDown from '../MapDropDown/MapDropDown'

const TripPanel = () => {

const startGame = (event: React.FormEvent<HTMLFormElement>): void => {
  event.preventDefault()
  console.log('triggered');
}

  return (
    <>
    <form onSubmit={startGame}>
      <MapDropDown />
      <button>Start</button>
    </form>
    </>
  )
}
export default TripPanel

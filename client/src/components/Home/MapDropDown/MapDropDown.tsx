import React, { useState } from 'react'
import { updateGameSession } from '../../../slices/eventSlice'
import { useDispatch } from 'react-redux'
import './MapDropDown.css'

const MapDropDown: React.FC = () => {
  type MapOption = 'River-Bend' | 'River-Mouth' | 'Abandoned-River'

  const [map, setMap] = useState<MapOption>('River-Bend')
  const dispatch = useDispatch()

  const handleMapChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMap = event.target.value as MapOption
    setMap(selectedMap)

    dispatch(updateGameSession({ map: selectedMap }))
  }

  return (
    <select value={map} onChange={handleMapChange} className='map-select'>
      <option value="River-Bend">River-Bend</option>
      <option value="River-Mouth">River-Mouth</option>
      <option value="Abandoned-River">Abandoned-River</option>
    </select>
  )
}
export default MapDropDown

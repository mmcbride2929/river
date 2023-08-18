import * as React from 'react'
import './ImageContainer.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

import bendSpotImage from '../../../assets/bend-spot.jpg'
import mouthSpotImage from '../../../assets/mouth-spot.jpg'
import abandonedSpotImage from '../../../assets/abandoned-spot.jpg'

const ImageContainer = () => {
  const selectedMap = useSelector((state: RootState) => state.event.map)

  const getImageSource = () => {
    switch (selectedMap) {
      case 'River-Bend':
        return bendSpotImage
      case 'River-Mouth':
        return mouthSpotImage
      case 'Abandoned-River':
        return abandonedSpotImage
      default:
        return bendSpotImage
    }
  }

  return (
    <>
      <img src={getImageSource()} alt={selectedMap} />
    </>
  )
}
export default ImageContainer

import * as React from 'react'
import { render } from '@testing-library/react'
import ImageContainer from './ImageContainer'
import store from '../../../store'
import { Provider } from 'react-redux'

describe('ImageContainer', () => {
  it('should load the specific default image on initial load', () => {
    // Render the component
    const { getByAltText } = render(
      <Provider store={store}>
        <ImageContainer />
      </Provider>
    )

    // Get the image element by its alt text
    const imageElement = getByAltText('River-Bend')

    // Assert that the image element exists
    expect(imageElement).toBeInTheDocument()

    // Assert that the image source (src) is correct
    expect(imageElement).toHaveAttribute('alt', 'River-Bend')
  })
})

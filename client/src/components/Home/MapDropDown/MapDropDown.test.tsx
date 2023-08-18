import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import MapDropDown from './MapDropDown'
import ImageContainer from '../ImageContainer/ImageContainer'
import store from '../../../store'
import { Provider } from 'react-redux'

describe('MapDropDown', () => {
  it('should give users three different map options', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MapDropDown />
      </Provider>
    )
    const selectElement = getByRole('combobox')
    const optionElements = selectElement.querySelectorAll('option')

    expect(optionElements.length).toBe(3)
  })

  it('should change state when new options are chosen', () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <ImageContainer />
        <MapDropDown />
      </Provider>
    )
    const selectElement = getByRole('combobox')

    // Simulate user selecting a different option
    fireEvent.change(selectElement, { target: { value: 'River-Mouth' } })

    // Find an element that reflects the updated state
    const updatedElement = getByText('River-Mouth')
    const updatedImage = getByRole('img')
    // Assert that the updated element is in the DOM
    expect(updatedElement).toBeInTheDocument()
    expect(updatedImage).toHaveAttribute('alt', 'River-Mouth')

    // Simulate user selecting a different option
    fireEvent.change(selectElement, { target: { value: 'Abandoned-River' } })

    // Find an element that reflects the updated state
    const updatedElement2 = getByText('Abandoned-River')
    const updatedImage2 = getByRole('img')

    // Assert that the updated element is in the DOM
    expect(updatedElement2).toBeInTheDocument()
    expect(updatedImage2).toHaveAttribute('alt', 'Abandoned-River')
  })
})

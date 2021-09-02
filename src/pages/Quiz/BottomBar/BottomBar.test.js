import React from 'react'
import ReactDOM from 'react-dom'
import BottomBar from './BottomBar'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders progress bar without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = {
    currentScore: 0,
    lowestScore: 0,
    highestScore: ''
  }
  ReactDOM.render(<BottomBar {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the gray bar', () => {
  const { getByTestId } = render(<BottomBar />)
  const grayBar = getByTestId('gray-bar')
  expect(grayBar).toBeInTheDocument()
})

it('renders the probability bar', () => {
  const { getByTestId } = render(<BottomBar />)
  const probBar = getByTestId('probability-progress-bar')
  expect(probBar).toBeInTheDocument()
})

it('renders the prob bar', () => {
  const { getByTestId } = render(<BottomBar />)
  const incorrectBar = getByTestId('incorrect-progress-bar')
  expect(incorrectBar).toBeInTheDocument()
})

import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBar from './ProgressBar'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders progress bar without crashing', () => {
  const div = document.createElement('div')
  const props = {
    barWidth: 0
  }
  ReactDOM.render(<ProgressBar {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the dark bar', () => {
  const { getByTestId } = render(<ProgressBar />)
  const darkBar = getByTestId('dark-bar')
  expect(darkBar).toBeInTheDocument()
})

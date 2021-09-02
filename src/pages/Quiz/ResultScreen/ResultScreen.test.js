import React from 'react'
import ReactDOM from 'react-dom'
import ResultScreen from './ResultScreen'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders result screen without crashing', () => {
  const div = document.createElement('div')
  const props = {
    handleReset: 'True',
    score: ''
  }
  ReactDOM.render(<ResultScreen {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the result wrap', () => {
  const { getByTestId } = render(<ResultScreen />)
  const data = getByTestId('result-wrap')
  expect(data).toBeInTheDocument()
})

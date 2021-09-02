import React from 'react'
import ReactDOM from 'react-dom'
import QuizScreen from './QuizScreen'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'


it('renders quiz screen without crashing', () => {
  const div = document.createElement('div')
  const props = {}
  ReactDOM.render(<QuizScreen {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the card', () => {
  const { getByTestId } = render(<QuizScreen />)
  const card = getByTestId('card')
  expect(card).toBeInTheDocument()
})

it('renders the card data', () => {
  const { getByTestId } = render(<QuizScreen />)
  const cardData = getByTestId('card-data')
  expect(cardData).toBeInTheDocument()
})

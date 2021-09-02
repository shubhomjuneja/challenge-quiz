import React from 'react'
import ReactDOM from 'react-dom'
import Questions from './Questions'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders questions without crashing', () => {
  const div = document.createElement('div')
  const props = {
    currentIdx: 0,
    onAnswerSelect: 'True',
    selectedAnswer: '',
    message: ''
  }
  ReactDOM.render(<Questions {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the card header', () => {
  const { getByTestId } = render(<Questions />)
  const cardHeader = getByTestId('card-header')
  expect(cardHeader).toBeInTheDocument()
})

it('renders the card body', () => {
  const { getByTestId } = render(<Questions />)
  const cardBody = getByTestId('card-body')
  expect(cardBody).toBeInTheDocument()
})

it('renders the card heading', () => {
  const { getByTestId } = render(<Questions />)
  const cardHeading = getByTestId('card-heading')
  expect(cardHeading).toBeInTheDocument()
})

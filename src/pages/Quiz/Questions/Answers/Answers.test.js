import React from 'react'
import ReactDOM from 'react-dom'
import Answers from './Answers'

it('renders answers without crashing', () => {
  const div = document.createElement('div')
  const props = {
    currentQuestion: '',
    handleAnswerSelect: 'True',
    active: false,
    disabled: false,
    selectedAnswer: ''
  }
  ReactDOM.render(<Answers {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

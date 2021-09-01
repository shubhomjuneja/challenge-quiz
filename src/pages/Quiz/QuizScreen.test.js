import React from 'react'
import ReactDOM from 'react-dom'
import QuizScreen from './QuizScreen'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { }
  ReactDOM.render(<QuizScreen {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

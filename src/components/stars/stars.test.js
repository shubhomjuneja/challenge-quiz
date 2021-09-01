import React from 'react'
import ReactDOM from 'react-dom'
import StarsComponent from '.'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { value: 2 }
  ReactDOM.render(<StarsComponent {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

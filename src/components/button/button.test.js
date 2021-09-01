import React from 'react'
import ReactDOM from 'react-dom'
import Button from '.'

test('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { name: 'btn-name' }
  ReactDOM.render(<Button {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

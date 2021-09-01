import React from 'react'

const ButtonComponent = ({ handleClick, name, type = 'button', className, children }) =>
  <button
    type={type}
    id={name}
    onClick={handleClick}
    className={className}
  >
    {children}
  </button>

export default ButtonComponent

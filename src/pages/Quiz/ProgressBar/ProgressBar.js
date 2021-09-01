import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ barWidth }) => (
  <div className='w3-light-grey'>
    <div
      className='w3-yellow dark-progress-bar'
      style={{
        height: '24px',
        width: barWidth
      }}
    />
  </div>
)

export default ProgressBar

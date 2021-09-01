import React from 'react'
import './BottomBar.css'

const BottomBar = ({ currentScore, lowestScore, highestScore }) =>
  <>
    <div className={'scores-wrap'}>
      <p>Score: {currentScore}</p>
      <p>Max Score: {highestScore}</p>
    </div>
    <div className='w3-light-grey bottom-progress'>
      <div
        className='w3-black dark-progress-bar'
        style={{ height: '24px', width: lowestScore }}
      />
      <div
        className='w3-black prob-progress-bar'
        style={{
          height: '24px',
          width: currentScore
        }}
      />
      <div
        className='w3-black incorrect-progress-bar'
        style={{
          height: '24px',
          width: highestScore
        }}
      />
    </div>
  </>

export default BottomBar

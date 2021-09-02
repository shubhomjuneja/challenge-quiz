import React from 'react'
import {
  ScoresWrap,
  LightGrayBar,
  DarkGrayBar,
  ProbProgressBar,
  IncorrectProgressBar
} from './BottomBarStyle'

const BottomBar = ({ currentScore, lowestScore, highestScore }) => (
  <>
    <ScoresWrap>
      <p>Score: {currentScore}</p>
      <p>Max Score: {highestScore}</p>
    </ScoresWrap>
    <LightGrayBar>
      <DarkGrayBar style={{ height: '24px', width: lowestScore }} data-testid='gray-bar' />
      <ProbProgressBar
        style={{
          height: '24px',
          width: currentScore
        }}
        data-testid='probability-progress-bar'
      />
      <IncorrectProgressBar
        style={{
          height: '24px',
          width: highestScore
        }}
        data-testid='incorrect-progress-bar'
      />
    </LightGrayBar>
  </>
)

export default BottomBar

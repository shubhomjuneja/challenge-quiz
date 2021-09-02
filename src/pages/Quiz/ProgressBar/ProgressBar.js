import React from 'react'
import { ProgressBarWrap, DarkProgressBar } from './ProgressBarStyle'

const ProgressBar = ({ barWidth }) => (
  <ProgressBarWrap>
    <DarkProgressBar
      style={{
        height: '24px',
        width: barWidth
      }}
      data-testid='dark-bar'
    />
  </ProgressBarWrap>
)

export default ProgressBar

import ButtonComponent from 'src/components/button'
import React from 'react'
import { ResultWrap, ThanksText } from './ResultScreenStyle'

const ResultScreen = ({ handleReset, score }) => (
  <ResultWrap data-testid='result-wrap'>
    <ThanksText>Thank You!</ThanksText>
    <ThanksText>Your score is {score}.</ThanksText>
    <ButtonComponent
      handleClick={() => handleReset()}
      name={'reset-button'}
      className='next-button'
    >
      Restart
    </ButtonComponent>
  </ResultWrap>
)

export default ResultScreen

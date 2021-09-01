import ButtonComponent from 'src/components/button'
import React from 'react'

const ResultScreen = ({ handleReset, score }) =>
  <div align='center'>
    <h3 className='thanks-text'>Thank You!</h3>
    <h3 className='thanks-text'>Your score is {score}.</h3>
    <ButtonComponent
      handleClick={handleReset}
      name={'reset-button'}
      className='next-button'>
      Restart
    </ButtonComponent>
  </div>

export default ResultScreen

import React, { useMemo } from 'react'
import shuffle from 'lodash/shuffle'
import { getAnswersArray } from 'src/utils/utils'
import { OptionWrap, Options } from './AnswersStyle'

const AnswerOptions = ({
  currentQuestion,
  handleAnswerSelect,
  active,
  disabled,
  selectedAnswer
}) => {
  const answers = useMemo(() => shuffle(getAnswersArray(currentQuestion)), [
    currentQuestion
  ])

  const getAnswerClass = (answer) => {
    if (selectedAnswer) {
      if (selectedAnswer === answer) {
        if (active) {
          return 'green disabled'
        } else {
          return 'wrong disabled'
        }
      } else {
        if (answer === currentQuestion.correct_answer) {
          return 'green disabled'
        } else {
          return 'disabled'
        }
      }
    }
  }

  return (
    <OptionWrap data-testid='options'>
      {answers.map((answer, idx) => (
        <Options
          key={answer}
          className={`options ${getAnswerClass(answer)}`}
        >
          <input
            type='radio'
            id={answer}
            name={answer}
            value={answer}
            disabled={disabled}
            onChange={(e) => handleAnswerSelect(e)}
            data-testid='answer-input'
          />
          <label htmlFor='option'>{decodeURIComponent(answer)}</label>
        </Options>
      ))}
    </OptionWrap>
  )
}

export default AnswerOptions

import React, { useMemo } from 'react'
import shuffle from 'lodash/shuffle'
import './Answers.css'
import { getAnswersArray } from '../../../../utils/utils'

const AnswerOptions = ({
  currentQuestion,
  handleAnswerSelect,
  active,
  disabled,
  selectedAnswer
}) => {
  const answers = useMemo(() =>
    shuffle(getAnswersArray(currentQuestion)),
  [currentQuestion])

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

  return <div className='optionWrap' data-testid='options'>
    { answers.map((answer, idx) =>
      <div
        onClick={handleAnswerSelect}
        key={answer}
        className={`options ${getAnswerClass(answer)}`}
        data-testid='options'
      >
        <input
          type='radio'
          id={answer}
          name={answer}
          value={answer}
          disabled={disabled
          }
        />
        <label htmlFor='option'>{decodeURIComponent(answer)}</label>
      </div>
    )
    }
  </div>
}

export default AnswerOptions

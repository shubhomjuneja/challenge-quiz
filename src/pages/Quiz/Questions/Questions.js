import StarsComponent from 'src/components/stars'
import { DIFFICULTY } from 'src/constants'
import AnswerOptions from './Answers/Answers'
import React from 'react'
import questionsJson from 'src/data/questions.json'
import './Questions.css'
import get from 'lodash/get'
const questions = questionsJson || []

const Questions = ({ currentIdx, onAnswerSelect, selectedAnswer, message }) => (
  <>
    <div className='card-heading'>
      <h3>{`Question  ${currentIdx + 1} out of ${questions.length}`}</h3>
      <p>
        {decodeURIComponent(get(questions[currentIdx], 'category'))}
      </p>
      <StarsComponent value={DIFFICULTY[get(questions[currentIdx], 'difficulty')]} />
    </div>

    <div className='card-data container'>
      <h4 className='question'>
        {currentIdx + 1}.{' '}
        {decodeURIComponent(get(questions[currentIdx], 'question'))}
      </h4>
    </div>

    <div className='card-data container'>
      {
        <AnswerOptions currentQuestion={questions[currentIdx] || {}}
          handleAnswerSelect={onAnswerSelect}
          active={selectedAnswer === get(questions[currentIdx], 'correct_answer')}
          disabled={!!selectedAnswer}
          wrongAnswer={selectedAnswer !== get(questions[currentIdx], 'correct_answer')}
          selectedAnswer={selectedAnswer}
        />
      }
      {message ? (
        <div className='inner-text'>
          <h3>{message}</h3>
        </div>
      ) : null}
    </div>
  </>
)

export default Questions

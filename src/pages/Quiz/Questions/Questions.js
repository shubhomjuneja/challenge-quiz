import StarsComponent from 'src/components/stars'
import { DIFFICULTY } from 'src/constants'
import AnswerOptions from './Answers/Answers'
import React from 'react'
import questionsJson from 'src/data/questions.json'
import get from 'lodash/get'
import {
  CardHeader,
  CardBody,
  QuestionHeading,
  MessageWrap
} from './QuestionsStyle'
const questions = questionsJson || []

const Questions = ({ currentIdx, onAnswerSelect, selectedAnswer, message }) => (
  <>
    <CardHeader data-testid='card-header'>
      <h3>{`Question  ${currentIdx + 1} out of ${questions.length}`}</h3>
      <p>{decodeURIComponent(get(questions[currentIdx], 'category'))}</p>
      <StarsComponent
        value={DIFFICULTY[get(questions[currentIdx], 'difficulty')]}
      />
    </CardHeader>

    <CardBody data-testid='card-body'>
      <QuestionHeading data-testid='card-heading'>
        {currentIdx + 1}.{' '}
        {decodeURIComponent(get(questions[currentIdx], 'question'))}
      </QuestionHeading>
    </CardBody>

    <CardBody>
      {
        <AnswerOptions
          currentQuestion={questions[currentIdx] || {}}
          handleAnswerSelect={onAnswerSelect}
          active={
            selectedAnswer === get(questions[currentIdx], 'correct_answer')
          }
          disabled={!!selectedAnswer}
          wrongAnswer={
            selectedAnswer !== get(questions[currentIdx], 'correct_answer')
          }
          selectedAnswer={selectedAnswer}
        />
      }
      {message ? (
        <MessageWrap>
          <h3>{message}</h3>
        </MessageWrap>
      ) : null}
    </CardBody>
  </>
)

export default Questions

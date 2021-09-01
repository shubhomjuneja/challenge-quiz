import React, { useMemo, useState } from 'react'
import questionsJson from 'src/data/questions.json'
import ProgressBar from './ProgressBar/ProgressBar'
import './QuizScreen.css'
import BottomProgressBar from './BottomBar/BottomBar'
import ButtonComponent from 'src/components/button'
import Questions from './Questions/Questions'
import { toPercentage } from 'src/utils/utils'
import ResultScreen from './ResultScreen/ResultScreen'

const QuizScreen = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [message, setMessage] = useState('')
  const [correctScore, setCorrectScore] = useState(0)
  const [incorrectScore, setIncorrectScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const questions = questionsJson || []

  const nextQuestion = (nextValue) => {
    setCurrentIdx(nextValue)
    setSelectedAnswer('')
    setMessage('')
  }

  const resetQuiz = () => {
    setCurrentIdx(0)
    setMessage('')
    setCorrectScore(0)
    setIncorrectScore(0)
    setSelectedAnswer('')
  }

  const onAnswerSelect = (e) => {
    e.preventDefault()
    const userAnswer = e.target.value
    const correctAnswer = questions[currentIdx].correct_answer
    if (userAnswer === correctAnswer) {
      setMessage('Correct!')
      setCorrectScore(correctScore + 1)
    } else {
      setMessage('Sorry!')
      setIncorrectScore(incorrectScore + 1)
    }
    setSelectedAnswer(userAnswer)
  }

  const completedPercentage = useMemo(() =>
    toPercentage(currentIdx + 1, questions.length), [currentIdx, questions])
  const lowestScorePercentage = useMemo(() =>
    toPercentage(correctScore, questions.length), [correctScore, questions])
  const scorePercentage = useMemo(() =>
    toPercentage(correctScore, currentIdx + !!selectedAnswer),
  [correctScore, currentIdx, selectedAnswer])
  const highestScorePercentage = useMemo(() =>
    toPercentage(questions.length - incorrectScore, questions.length),
  [incorrectScore, questions])

  return <div data-testid='quiz-card'>
    <div className='card'>
      { currentIdx >= questions.length ? (
        <ResultScreen handleReset={resetQuiz} score={scorePercentage} />
      ) : (
        <div>
          <div className='cardData'>
            <ProgressBar barWidth={completedPercentage} />
            <Questions
              currentIdx={currentIdx}
              message={message}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={onAnswerSelect}
            />
            {(currentIdx <= questions.length - 1 && selectedAnswer) ? (
              <div className={'inner-text'}>
                <ButtonComponent
                  className={'next-button'}
                  name={'next-button'}
                  handleClick={() => nextQuestion(currentIdx + 1)}>
                      Next
                </ButtonComponent>
              </div>
            ) : null }
          </div>
          <BottomProgressBar
            lowestScore={lowestScorePercentage}
            currentScore={scorePercentage}
            highestScore={highestScorePercentage}
          />
        </div>
      )}
    </div>
  </div>
}

export default QuizScreen

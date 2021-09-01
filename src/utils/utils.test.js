import { getAnswersArray, toPercentage } from './utils'

describe('toPercentage test', () => {
  test('returns a number for a valid input', () => {
    expect(toPercentage(10, 20)).toEqual('50%')
  })

  test('returns 0 if nothing is provided', () => {
    expect(toPercentage()).toEqual('0%')
  })

  test('return a number for a valid input', () => {
    expect(toPercentage(20, 30)).toEqual('67%')
  })

  test('return NAN% for anything other than number', () => {
    expect(toPercentage('', 'sj')).toEqual('NaN%')
  })
})

describe('getAnswerArray arrays', () => {
  test('returns an array with empty string', () => {
    expect(getAnswersArray({})).toEqual([''])
  })

  test('returns a valid result', () => {
    expect(getAnswersArray({ incorrect_answers: [], correct_answer: '2' })).toEqual(['2'])
  })

  test('returns a valid result #2', () => {
    expect(getAnswersArray({ incorrect_answers: [''], correct_answer: '2' })).toEqual(['', '2'])
  })
})

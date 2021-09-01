const toPercentage = (val = 0, totalVal = 0) => {
  if (totalVal) { return `${Math.round((val / totalVal) * 100)}%` } else { return '0%' }
}

const getAnswersArray = ({ incorrect_answers = [], correct_answer = '' }) =>
  [ ...incorrect_answers, correct_answer ]

export { toPercentage, getAnswersArray }

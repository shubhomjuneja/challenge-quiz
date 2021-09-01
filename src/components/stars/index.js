import React from 'react'
import OutlineStarIcon from '../icons/outlineStar'
import StarIcon from '../icons/star'

const starsArr = new Array(3).fill(1)

const StarsComponent = ({ value = 0 }) =>
  starsArr.map((val, idx) => (
    (idx < value) ? <StarIcon key={idx} /> : <OutlineStarIcon key={idx} />
  ))

export default StarsComponent

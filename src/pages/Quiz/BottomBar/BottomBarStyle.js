import styled from 'styled-components'

export const ScoresWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LightGrayBar = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`
export const DarkGrayBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: gray;
`
export const ProbProgressBar = styled.div`
  background-color: #4c4c4c;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`
export const IncorrectProgressBar = styled.div`
  background-color: #b4b2b2;
`

import styled from 'styled-components'

export const OptionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Options = styled.div`
  border: 1px solid #ccc;
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 18px;
  width: 45%;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  input {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: 0;
  }
  &.active {
    border: 1px solid #42bcee;
    background-color: #42bcee;
    color: #fff;
    opacity: 1 !important;
  }
  &.wrong {
    border: 1px solid red;
    background-color: red;
    color: #fff;
    opacity: 0.7 !important;
  }
  &.disabled {
    opacity: 0.5;
  }
  &.green {
    background-color: green;
    color: #fff !important;
    opacity: 1 !important;
  }
`

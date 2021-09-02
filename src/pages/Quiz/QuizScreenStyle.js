import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  height: calc(100vh - 80px);
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 40px;
  .next-button {
    width: 150px;
    height: 40px;
    margin: 30px auto;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;
    display: block;
  }
  @media only screen and (max-width: 767px) {
    .card {
      padding: 40px 26px;
    }
    .next-button {
      margin: 0;
    }
  }
`

export const CardData = styled.div`
  height: calc(100vh - 150px);
`

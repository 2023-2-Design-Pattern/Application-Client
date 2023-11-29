import React from 'react'
import styled from 'styled-components'

const InfoBox = () => {
  return (
    <Wrapper>
      <GameTitle>Christmas Mare</GameTitle>
    </Wrapper>
  )
}

export default InfoBox

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const GameTitle = styled.div`
  display: flex;
  color: red;
  font-size: 80px;
`
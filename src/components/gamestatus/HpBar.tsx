import React from 'react'
import styled from 'styled-components'

const HpBar = () => {
  return (
    <Wrapper>
      <div className='label'>HP</div>
      <HPBox>
        <div className='hp-status' />
        <div className='current-hp'>70%</div>
      </HPBox>
    </Wrapper>
  )
}

export default HpBar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  width: 100%;
  gap: 10px;
  & > .label{
    font-size: 30px;
  }
`

const HPBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  /* height: 20px; */
  gap: 10px;
  border: 1px solid red;
  & > .current-hp {
    font-size: 15px;
    color: red;
  }
  & > .hp-status {
    width: 70%;
    height: 20px;
    background-color: red;
  }
`
import styled from 'styled-components'

const HpBar = (props:{currentHealth:number}) => {
  return (
    <Wrapper>
      <div className='label'>HP</div>
      {
        props.currentHealth < 0 ? 
        <HPBox percentage={0}>
          <div className='hp-status' />
          <div className='current-hp'>{`0%`}</div>
        </HPBox>
      :
        <HPBox percentage={props.currentHealth}>
          <div className='hp-status' />
          <div className='current-hp'>{`${props.currentHealth}%`}</div>
        </HPBox>
      }
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

const HPBox = styled.div<{percentage:number}>`
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
    width: ${props => `${props.percentage}%`};
    height: 20px;
    background-color: red;
  }
`
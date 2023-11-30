import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { roundAtom } from '../../utils/recoilVal';
import { useNavigate } from 'react-router-dom';

const RoundInfo = () => {
    const round = useRecoilValue(roundAtom);
    const navigate = useNavigate();
  return (
    <Wrapper>
        <div className='title'>{`You are in Round ${round}`}</div>
        <div>If you want to move next, please success current round!</div>
        {
            round === 3 ?
            <ButtonWrapper>
                <RoundActiveBtn onClick={() => navigate('/game')}>Round 1</RoundActiveBtn>
                <RoundActiveBtn onClick={() => navigate('/game')}>Round 2</RoundActiveBtn>
                <RoundActiveBtn onClick={() => navigate('/game')}>Round 3</RoundActiveBtn>
            </ButtonWrapper>
            : 
            (round === 2 ?
                <ButtonWrapper>
                    <RoundActiveBtn onClick={() => navigate('/game')}>Round 1</RoundActiveBtn>
                    <RoundActiveBtn onClick={() => navigate('/game')}>Round 2</RoundActiveBtn>
                    <RoundBtn>Round 3</RoundBtn>
                </ButtonWrapper>
                :
                <ButtonWrapper>
                    <RoundActiveBtn onClick={() => navigate('/game')}>Round 1</RoundActiveBtn>
                    <RoundBtn>Round 2</RoundBtn>
                    <RoundBtn>Round 3</RoundBtn>
                </ButtonWrapper>
            )
        }
    </Wrapper>
  )
}

export default RoundInfo

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  gap: 20px;
  background-color: black;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  & > .title{
    font-size: 60px;
  }
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
`

const RoundBtn = styled.div`
    display: flex;
    width: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #5e5e5e;
    background-color: #9c9c9c;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

const RoundActiveBtn = styled.div`
    display: flex;
    width: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    background-color: red;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    &:hover{
        cursor: pointer;
    }
`
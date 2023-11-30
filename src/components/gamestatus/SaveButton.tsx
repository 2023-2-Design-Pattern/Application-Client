import React from 'react'
import styled from 'styled-components'
import { postSaveMap } from '../apis/setGame';
import { useRecoilValue } from 'recoil';
import { roundAtom, userNameAtom } from '../../utils/recoilVal';

const SaveButton = (props:{mapArr:number[][], currentHealth:number}) => {
    const userName = useRecoilValue(userNameAtom);
    const round = useRecoilValue(roundAtom);
    const handleOnClickEvent = async() => {
        const response = await postSaveMap(userName, round, props.mapArr, props.currentHealth);
        if(response === false){
            console.log('저장 실패');
        } else {
            console.log('저장 성공');
        }
    }
  return (
    <Wrapper>
        <Button className='info'>How to Play</Button>
        <Button onClick={handleOnClickEvent}>Save Current Status</Button>
    </Wrapper>
  )
}

export default SaveButton

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
`

const Button = styled.div`
    display: flex;
    width: 45%;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 20px;
    background-color: red;
    color: white;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
    &.info{
        background-color: green;
        color: white;
    }
`
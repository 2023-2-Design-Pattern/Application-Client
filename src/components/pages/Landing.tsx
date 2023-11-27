import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { postUser } from '../../utils/apis';
import { useSetRecoilState } from 'recoil';
import { userNameAtom } from '../../utils/recoilVal';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [userName, setUserName] = useState('');
    const [btnActive, setBtnActive] = useState('');
    // const setUserNameRecoil = useSetRecoilState(userNameAtom);

    const navigate = useNavigate();

    useEffect(()=>{
        if(userName === ''){
            setBtnActive('');
        } else {
            setBtnActive('active');
        }
    }, [userName])

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const onClickEvent = async() => {
        if(userName !== ''){
            console.log(userName);
            //API 호출
            // const response = await postUser(userName);
            // if(response === false){
            //     console.log('error');
            // } else {
            //     setUserNameRecoil(userName);
            // }
            navigate(`/game`);
        }
    };
  return (
    <Wrapper>
        <div className='title'>Christmas Mare</div>
        <GetUserNameWrapper>
            <div className='username-label'>UserName</div>
            <UserNameInputBox>
                <input placeholder='Enter Your NickName' value={userName} onChange={(e)=>onChangeInput(e)} />
                <Button className={btnActive} onClick={() => onClickEvent()}>Go!</Button>
            </UserNameInputBox>
        </GetUserNameWrapper>
    </Wrapper>
  )
}

export default Landing

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 280px;
    gap: 50px;
    & > .title{
        font-size: 100px;
        color: white;
    }
`

const GetUserNameWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 10px;
    & > .username-label{
        font-size: 30px;
        color: white;
    }
`

const UserNameInputBox = styled.div`
    display: flex;
    width: 70%;
    background-color: white;
    border-radius: 50px;
    padding: 10px 10px 10px 5px;
    & > input{
        width: 80%;
        border-radius: 50px;
        border: none;
        margin-left: 20px;
        padding: 10px 10px 10px 5px;
        font-size: 20px;
        &:focus{
            outline: none;
        }
    }
`

const Button = styled.div`
    display: flex;
    width: 20%;
    background-color: #C9C9C9;
    border-radius: 20px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    color: #969696;
    &.active{
        background-color: red;
        color: white;
        &:hover{
            cursor: pointer;
        }
    }
`
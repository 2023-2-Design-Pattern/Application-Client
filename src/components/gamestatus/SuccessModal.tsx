import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { roundAtom, userNameAtom } from '../../utils/recoilVal';
import { useNavigate } from 'react-router-dom';
import { postGameEnd } from '../apis/setGame';

const SuccessModal = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const userName = useRecoilValue(userNameAtom);
    const round = useRecoilValue(roundAtom);
	const navigate = useNavigate();
	const handleRetry = async(clear:boolean) => {
		const response = await postGameEnd(userName, round, clear);
		if(response === false){
			console.log('에러 발생')
		} else {
			navigate('/');
		}
	}
  return (
    <ModalSection height={totalHeight}>
        <ModalStyle>
            <div className='title'>Success!</div>
            <ButtonWrapper>
                <SuccessBtn onClick={() => handleRetry(true)}>Home</SuccessBtn>
            </ButtonWrapper>
        </ModalStyle>
    </ModalSection>
  )
}

export default SuccessModal

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
`;

const ModalStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10rem;
	padding-top: 100px;
	padding-bottom: 100px;
	align-items: center;
	width: 300px;
	height: fit-content;
	background-color: #ffffff;
	border-radius: 5px;
	z-index: 3;
	@media (min-width: 576px) {
		width: 60%;
	}
	& >.title{
		font-size: 100px;
		font-weight: bold;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`

const SuccessBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	background-color: green;
	color: white;
	font-size: 60px;
	border-radius: 50px;
	&:hover{
		cursor: pointer;
	}
`
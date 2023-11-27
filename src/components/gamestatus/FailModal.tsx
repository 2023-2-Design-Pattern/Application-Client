import React from 'react'
import styled from 'styled-components';

const FailModal = () => {
    const totalHeight = document.documentElement.scrollHeight;
  return (
    <ModalSection height={totalHeight}>
        <ModalStyle>
            Fail...
        </ModalStyle>
    </ModalSection>
  )
}

export default FailModal

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
	align-items: center;
	width: 30rem;
	height: fit-content;
	font-size: 1.5rem;
	font-weight: bold;
	background-color: #ffffff;
	border-radius: 5px;
	z-index: 3;
	@media (min-width: 576px) {
		width: 60%;
	}
`;
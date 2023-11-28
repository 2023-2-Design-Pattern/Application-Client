import React from 'react'
import styled from 'styled-components';

const SuccessModal = () => {
    const totalHeight = document.documentElement.scrollHeight;
  return (
    <ModalSection height={totalHeight}>
        <ModalStyle>
            Success!!!
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
    align-items: center;
    width: 40%;
    height: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #ffffff;
    border-radius: 5px;
    z-index: 3;
`;

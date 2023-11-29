import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userNameAtom } from '../../utils/recoilVal';
import { postUserName } from '../apis/setGame';

const Landing = () => {
  const totalHeight = document.documentElement.clientHeight;
  const [userNameVal, setUserNameVal] = useRecoilState(userNameAtom);
  const [userName, setUserName] = useState(userNameVal);
  const [btnActive, setBtnActive] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (userName === "") {
      setBtnActive("");
    } else {
      setBtnActive("active");
    }
  }, [userName]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onClickEvent = async () => {
    if (userName !== "") {
      setUserNameVal(userName);
      console.log(userName);
      //API 호출
      const response = await postUserName(userName);
      if(response === false){
          console.log('error');
      } else {
          console.log(response);
      }
      navigate(`/game`);
    }
  };
  return (
    <Wrapper totalheight={totalHeight}>
      <LeftWrapper>
        <div className="action">🢀 🢂 🢁 🢃</div>
        <div className="des">Move</div>
        <div className="action">Drag & Drop</div>
        <div className="des">Upgrade or Use Items</div>
        <div className="action">First Level Items</div>
        <ItemWrapper>
          <img src="/img/item-3.png" className="item"></img>
          <img src="/img/item-4.png" className="item"></img>
          <img src="/img/item-5.png" className="item"></img>
        </ItemWrapper>
        <div className="action">Second Level Items</div>
        <ItemWrapper>
          <img src="/img/item-6.png" className="item"></img>
          <img src="/img/item-7.png" className="item"></img>
          <img src="/img/item-8.png" className="item"></img>
        </ItemWrapper>
        <div className="action">What will it be?</div>
        <ItemWrapper>
          <img src="/img/item-3.png" className="item"></img>
          <div className="item-for">+</div>
          <img src="/img/item-3.png" className="item"></img>
          <div className="item-for">=</div>
          <div className="item-for">?</div>
        </ItemWrapper>
      </LeftWrapper>

      <RightWrapper>
        <img src="/img/ghost.png" className="character"></img>
        <TitleWrapper>
          <img src="/img/item-4.png" className="title-img"></img>
          <div className="title">Christmas Mare</div>
          <img src="/img/item-4.png" className="title-img"></img>
        </TitleWrapper>
        <GetUserNameWrapper>
          <div className="username-label">UserName : </div>
          <UserNameInputBox>
            <input
              placeholder="Enter Your NickName"
              value={userName}
              onChange={(e) => onChangeInput(e)}
            />
            <Button className={btnActive} onClick={() => onClickEvent()}>
              Go!
            </Button>
          </UserNameInputBox>
        </GetUserNameWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div<{totalheight:number}>`
  display: flex;
  width: 100%;
  height: ${props => `${props.totalheight}px`};
  flex-direction: row;
  background-image: url('/img/background.png');
  background-size: cover;
  /* background-repeat: no-repeat; */
`;

const GetUserNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 10px;
  & > .username-label {
    font-size: 30px;
    color: white;
  }
`;

const UserNameInputBox = styled.div`
  display: flex;
  width: 50%;
  background-color: white;
  border-radius: 20px;
  padding: 10px 10px 10px 5px;
  & > input {
    width: 80%;
    border-radius: 20px;
    border: none;
    margin-left: 20px;
    padding: 10px 10px 10px 5px;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.div`
  display: flex;
  width: 20%;
  background-color: #c9c9c9;
  border-radius: 10px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: #969696;
  &.active {
    background-color: red;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > .title {
    font-size: 80px;
    color: lightgrey;
    padding-top: 15px;
    padding-bottom: 30px;
  }
  & > .title-img {
    width: 70px;
    height: 70px;
    padding: 15px 30px 20px 20px;
    padding-top: 15px;
    padding-bottom: 30px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  & > .character {
    display: flex;
    padding-top: 90px;
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  padding-top: 60px;
  background-color: black;
  color: white;
  & > .action {
    font-size: 30px;
  }
  & > .des {
    color: grey;
    font-size: 20px;
    padding-bottom: 20px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;

  & > .item {
    font-size: 20px;
    width: 30px;
    height: 30px;
  }
  & > .item-for {
    font-size: 20px;
    color: white;
  }
`;


import React from 'react'
import styled from 'styled-components'

const ItemBox = () => {
  return (
    <>
    <GridScroll>
        <GridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
            <ItemGridBox>T</ItemGridBox>
        </GridBox>
    </GridScroll>
    </>
  )
}

export default ItemBox

const GridScroll = styled.div`
    display: flex;
    overflow-y: scroll;
    justify-content: center;
    /* align-items: center; */
    width: fit-content;
    height: 300px;
    background-color: black;
    border: 10px solid red;
`

const GridBox = styled.div`
    display: grid;
    height: fit-content;
    /* border: 1px solid red; */
    background-color: black;
    //450px기준으로
    grid-template-columns: repeat(7, 70px);
    /* grid-template-rows: repeat(3,1fr); */
    grid-auto-flow: row;
    grid-gap: 2px;
    padding: 2px;
    margin-right: 10px;
    /* overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    } */
`

const ItemGridBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 63px;
    background-color: gray;
`
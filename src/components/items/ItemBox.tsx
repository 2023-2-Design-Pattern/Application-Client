import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { getAllItem } from '../../utils/request';
import { rushItem } from '../apis/item';
import { useRecoilValue } from 'recoil';
import { roundAtom, userNameAtom } from '../../utils/recoilVal';

interface ItemBoxProps {
    items: getAllItem[],
    itemClicked: boolean,
    selectedItem: getAllItem|undefined,
    setItems: React.Dispatch<React.SetStateAction<getAllItem[]>>,
    setItemClicked: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedItem: React.Dispatch<React.SetStateAction<getAllItem|undefined>>,
}

const ItemBox = (props:ItemBoxProps) => {
    const dragItem = useRef<number>();
    const dragOverItem = useRef<number>();
    const dragItemOwnId = useRef<number>();
    const dragOverItemOwnId = useRef<number>();

    const userName = useRecoilValue(userNameAtom);
    const round = useRecoilValue(roundAtom);

    useEffect(()=>{
        console.log(props.items);
    }, [props.items])

    const getRushItem = async(userGameItemId1:number, userGameItemId2:number) => {
        const response = await rushItem(userName, round, userGameItemId1, userGameItemId2);
        if(response === false) {
            console.log('fail');
        } else {
            props.setItems(response.items);
        }
    }

    const dragStart = (e:React.DragEvent<HTMLDivElement>, userGameItemId:number, itemId:number) => {
        dragItem.current = itemId;
        dragItemOwnId.current = userGameItemId;
        const eventTarget = e.target as HTMLElement;
        // console.log(e.target.innerHTML);
        console.log(eventTarget.innerHTML);
    }
    const dragEnter = (e:React.DragEvent<HTMLDivElement>, userGameItemId:number, itemId:number) => {
        dragOverItem.current = itemId;
        dragOverItemOwnId.current = userGameItemId;
        const eventTarget = e.target as HTMLElement;
        // console.log(e.target.innerHTML);
        console.log(eventTarget.innerHTML);
    }
    const drop = () => {
        console.log(`drag대상1(dragItem): ${dragItem.current}, drag대상2(dragOverItem): ${dragOverItem.current}`);
        if(dragItem.current === dragOverItem.current){
            if(dragItemOwnId.current === dragOverItemOwnId.current){
                if(!props.itemClicked){
                    if(dragItem.current === 3 || dragItem.current === 4 || dragItem.current === 5){
                        console.log('사용 불가!');
                    } else {
                        props.setSelectedItem({itemId: dragItem.current!, userGameItemId: dragItemOwnId.current!});
                        props.setItemClicked(true);
                        console.log('clicked');
                    }
                } else {
                    props.setSelectedItem(undefined);
                    props.setItemClicked(false);
                    console.log('clicked');
                }
            } else if(dragItem.current === 3 || dragItem.current === 4 || dragItem.current === 5){
                getRushItem(dragItemOwnId.current!, dragOverItemOwnId.current!);
            } else {
                console.log('합성 불가');
            }
        } else {
            console.log('합성 불가');
        }
        dragItem.current = undefined;
        dragOverItem.current = undefined;
        dragItemOwnId.current = undefined;
        dragOverItemOwnId.current = undefined;
    }

    // const handleItemOnClick = () => {
    //     if(!isDragging){
    //         if(props.itemClicked === false){
    //             props.setItemClicked(true);
    //             console.log('clicked');
    //         } else {
    //             props.setItemClicked(false);
    //             console.log('clicked');
    //         }
    //     }
    // }
  return (
    <>
    <GridScroll>
        <GridBox>
            {
                props.items && props.items.map((element) => {
                    return(
                        <ItemGridBox
                        key={element.userGameItemId}
                        draggable
                        onDragStart={(e)=>dragStart(e, element.userGameItemId, element.itemId)}
                        onDragEnter={(e)=>dragEnter(e, element.userGameItemId, element.itemId)}
                        onDragEnd={drop}
                        onDragOver={(e) => e.preventDefault}>
                            <img src={`/img/item-${element.itemId}.png`} />
                        </ItemGridBox>
                    )
                })
            }
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
    background-color: #701a1a;
    border: 10px solid red;
`

const GridBox = styled.div`
    display: grid;
    height: fit-content;
    /* border: 1px solid red; */
    background-color: #701a1a;
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
    width: 100%;
    height: 63px;
    background-color: black;
    & > img{
        width: 80%;
        object-fit: cover;
    }
`

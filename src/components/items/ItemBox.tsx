import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getAllItem } from '../../utils/request';

const ItemBox = () => {
    const dragItem = useRef<number>();
    const dragOverItem = useRef<number>();
    const dragItemOwnId = useRef<number>();
    const dragOverItemOwnId = useRef<number>();

    const [items, setItems] = useState<getAllItem[]>(
        [
            {
                userGameItemId: 0,
                itemId: 3,
            },
            {
                userGameItemId: 1,
                itemId: 4,
            },
            {
                userGameItemId: 2,
                itemId: 4,
            },
            {
                userGameItemId: 3,
                itemId: 3,
            },
            {
                userGameItemId: 4,
                itemId: 4,
            },
        ]
    )

    useEffect(()=>{
        console.log(items);
    }, [items])

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
            console.log('합성 성공');
            if(dragItem.current === 3){
                const newItem = {
                    userGameItemId: items.length,
                    itemId: 6,
                }
                setItems(items.concat(newItem));
            } else if (dragItem.current === 4) {
                const newItem = {
                    userGameItemId: items.length,
                    itemId: 7,
                }
                setItems(items.concat(newItem));
            } else {
                const newItem = {
                    userGameItemId: items.length,
                    itemId: 8,
                }
                setItems(items.concat(newItem));
            }
        } else {
            console.log('합성 불가');
        }
        dragItem.current = undefined;
        dragOverItem.current = undefined;
        dragItemOwnId.current = undefined;
        dragOverItemOwnId.current = undefined;
    }
  return (
    <>
    <GridScroll>
        <GridBox>
            {
                items && items.map((element) => {
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
    width: 100%;
    height: 63px;
    background-color: gray;
    & > img{
        width: 80%;
        object-fit: cover;
    }
`
import React, { useEffect } from 'react'
import styled from 'styled-components';
import {TbChristmasTree} from 'react-icons/tb'

const MapFirstItem = () => {
    const MapArr = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ];

    const ItemPoint = [
        {row: 1, column: 2, item:1},
        {row: 2, column: 5, item:2},
    ];

    useEffect(()=>{
        for(let i=0; i<ItemPoint.length; i++){
            MapArr[ItemPoint[i].row][ItemPoint[i].column] = ItemPoint[i].item;
        }
    }, []);

  return (
    <GetZIndex>
    {
        MapArr.map((row) => {
            return <RowFlex>{
                row.map((element) => {
                    if(element === 1) {
                        return <Box>
                            <div className='icon'><TbChristmasTree color="green" /></div>
                        </Box>
                    }
                    else if(element === 2) {
                        return <Box>
                            <div className='icon'><TbChristmasTree /></div>
                        </Box>
                    }
                    else {return <Box> </Box>}
                })
            }</RowFlex>
        })
    }
    </GetZIndex>
  )
}

export default MapFirstItem

const GetZIndex = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 100;
    background-color: transparent;
    position: absolute;
`

const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
`

const Box = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    background-color: transparent;
    & > .icon{
        width: 100%;
    }
`
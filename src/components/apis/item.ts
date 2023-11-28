import axios from "axios";
import { defaultLink } from "./setGame";

//아이템 회득 API
export const postItem = async(userName:string, round:number, itemId:number) => {
    const data = {
        name: userName,
        round: round, 
        itemId: itemId,
    }
    try{
        const response = await axios.post(`${defaultLink}/item/get`, data);
        return response.data;
    }catch(error){
        console.log(error);
        return false;
    }
}

//아이템 사용 api
export const wallBreakItem = async(userName:string, round:number, userGameItemId:number) => {
    const data = {
        name: userName,
        round: round, 
        userGameItemId: userGameItemId,
    }
    try{
        const response = await axios.delete(`${defaultLink}/item/use`, {
            data: data,
        });
        return response.data;
    }catch(error){
        console.log(error);
        return false;
    }
}

//아이템 합성 api
export const rushItem = async(userName:string, round:number, userGameItemId1:number, userGameItemId2:number) => {
    const data = {
        name : userName,
        round: round,
        userGameItemId1 : userGameItemId1,
        userGameItemId2: userGameItemId2,
    }
    try{
        const response = await axios.post(`${defaultLink}/item/rush`, data);
        return response.data;
    }catch(error){
        console.log(error);
        return false;
    }
}

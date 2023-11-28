import axios from "axios"

export const defaultLink = "http://localhost:8080"

export const postUserName = async(userName:string) => {
    const data = {
        name: userName,
    }
    try{
        const response = await axios.post(`${defaultLink}/login`, data);
        return response.data;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const getGameStart = async(userName:string, round:number) => {
    try{
        const response = await axios.get(`${defaultLink}/games/${userName}/${round}`);
        return response.data;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const postSaveMap = async(userName:string, round:number, gameBoard:number[][], health:number) => {
    const data = {
        name: userName,
        round: round,
        gameBoard: String(gameBoard), 
        health: health,
    }
    try{
        const response = await axios.post(`${defaultLink}/games/save`, data);
        return response.data;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const postGameEnd = async(userName:string, round:number, clear:boolean) => {
    const data = {
        name:userName,
        round: round,
        clear: clear,
    }
    try{
        const response = await axios.post(`${defaultLink}/games/finish`, data);
        return response.data;
    } catch(error) {
        console.log(error);
        return false;
    }
}

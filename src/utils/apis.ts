import axios from "axios";

const basicPath = '';

export const postUser = async(userName:string) => {
    try {
		const response = await axios.post(`${basicPath}/login`, {name:userName});
		// console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
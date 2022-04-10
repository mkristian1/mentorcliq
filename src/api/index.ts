import axios from "axios";

class Api {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    getEmployess = async (params?: any) => {
        const { data } = await axios.get(`${this.url}/employess`, { params: { params } });
        return data;
    }
    getUser = async (params?: any) => {
        const { data } = await axios.get(`${this.url}/users`, { params });
        return data;
    }
    createUser = async (params: any) => {
        const { data } = await axios.post(`${this.url}/users`, params);
        return data;
    }
}


const MAIN_URL = process.env.REACT_APP_API_URL;

const api = new Api(`${MAIN_URL}`);
export default api;
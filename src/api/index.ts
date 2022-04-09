import axios from "axios";

class Api {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    getEmployess = async () => {
        const { data } = await axios.get(`${this.url}/employess`);
        return data;
    }
}


const MAIN_URL = process.env.REACT_APP_API_URL;

const api = new Api(`${MAIN_URL}`);
export default api;
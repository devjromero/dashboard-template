import axios from "axios";

const getConfig = () => {
    const instance = axios.create({
        baseURL: process.env.baseURL,
        headers: {
            'Authorization': getStoredToken(),
            'Accept': 'application/json'
        }
    });
    return instance;
}

const getStoredToken = ():string => {
    return localStorage.getItem('t')||''
}
export default getConfig;
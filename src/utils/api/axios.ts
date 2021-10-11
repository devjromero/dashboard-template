import axios from "axios";

const getConfig = () => {
    const instance = axios.create({
        baseURL: process.env.baseURL,
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });

    return instance;
}
export default getConfig;
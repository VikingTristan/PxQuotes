import axios from "axios";
axios.defaults.withCredentials = true;
const APIUrl = process.env.API || "https://api.quotes.vikingtom.ninja";
export default () => {
    return axios.create({
        baseURL: APIUrl
    });
};
import axios from "axios";
axios.defaults.withCredentials = true;
export default () => {
    return axios.create({
        baseURL: process.env.API || "https://api.quotes.vikingtom.ninja"
    });
};

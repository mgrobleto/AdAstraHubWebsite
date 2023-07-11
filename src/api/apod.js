import axios from "axios"; 

const API_KEY = "6Q2ftSqj4gTXy15Vck9zc5d4pMRIzq3tPZvlHOUE";
const ROOT_URL = "https://api.nasa.gov/planetary/apod?";

const apodApi = axios.create({
    baseURL: ROOT_URL, params: {
        api_key: API_KEY,
    }
})

export const getApod = async () => {
    const resp = await apodApi.get();
    return resp.data;
}
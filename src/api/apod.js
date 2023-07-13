import axios from "axios"; 

const API_KEY = "6Q2ftSqj4gTXy15Vck9zc5d4pMRIzq3tPZvlHOUE";
const ROOT_URL = "https://api.nasa.gov/planetary/apod";
const YOUTUBE_URL = process.env.YOUTUBE_URL
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

const apodApi = axios.create({
    baseURL: ROOT_URL + '?', params: {
        api_key: API_KEY,
    }
})

const youtubeApi = axios.create({
    baseURL: YOUTUBE_URL
})

export const getApod = async () => {
    const resp = await apodApi.get();
    return resp.data;
}

/* export const getAllImages = async (date) => {
    const resp = await apodApi.get({params: {
        date: date
    }})

    return resp.data;
}

export const getYoutubeVideo = async (query) => {
    const resp = await youtubeApi.get({params: {
        part: 'snippet',
        api_key: GOOGLE_API_KEY,
        q: query
    }})
} */


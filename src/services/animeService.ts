import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL

export const fetchAnime = async (query: string, page: number = 1, limit: number) => {
    const response = await axios.get(`${baseURL}/anime`, {
        params: { q: query, page, limit },
    });
    return response.data;
};

export const fetchAnimeById = async (id: number) => {
    const response = await axios.get(`${baseURL}/anime/${id}`);
    return response.data;
};

import axios from "axios";
const baseURL = import.meta.env.VITE_X_BASE_URL


const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST
    },
  };

  export const fetchDataFromAPI = async (url : string) => {
    const {data} = await axios.get(`${baseURL}/${url}`,options);
    return data;
  }

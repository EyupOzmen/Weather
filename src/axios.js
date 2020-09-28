import axios from "axios"


const instance = axios.create({
    baseURL:"https://api.weatherbit.io/v2.0/current",
    timeout:1000,
    headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "8b9936b788msh828d5560ac9d096p1293ecjsn564c7c09cdba"
    }
});

export default instance
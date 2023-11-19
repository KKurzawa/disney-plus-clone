import axios from 'axios';

// const movieBaseUrl = 'https://api.themoviedb.org/3';
// const api_key = '8a597021b72b44bff367b21fee9c9024';

const getTrendingVideos = axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8a597021b72b44bff367b21fee9c9024');

export default {
    getTrendingVideos
}
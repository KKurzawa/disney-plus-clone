import axios from 'axios';


const getTrendingVideos = axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8a597021b72b44bff367b21fee9c9024');
const getMovieByGenreID = (id) => axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8a597021b72b44bff367b21fee9c9024&with_genres=' + id)
export default {
    getTrendingVideos,
    getMovieByGenreID
}
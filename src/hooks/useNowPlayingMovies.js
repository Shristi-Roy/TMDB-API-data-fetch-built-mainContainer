import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Fetch data from TMDB Api and Update Store
const dispatch = useDispatch();

const getNowPlayingMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?page=1',
     API_OPTION);
     const json = await data.json();
     dispatch(addPlayingMovies(json.results));
};
useEffect(() => {
  getNowPlayingMovies();
},[]);

};

export default useNowPlayingMovies;
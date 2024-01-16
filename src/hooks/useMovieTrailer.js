import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // Fetch Trailer Videos && updating the store of trailer video data

    const getMoviesVideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        API_OPTION
    );
    const json = await data.json();
    console.log(json)

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
    };

    useEffect(() => {
        getMoviesVideos();
    },[])
}

export default useMovieTrailer
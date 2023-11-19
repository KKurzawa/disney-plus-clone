import GlobalApi from "../Services/GlobalApi";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io';

function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    })

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreID(genreId).then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += 500;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= 500;
    }
    return (
        <div className="relative">
            <HiChevronLeft onClick={() => sliderLeft(elementRef.current)}
                className="text-[50px] text-white 
            p-2 z-10 cursor-pointer
            hidden md:block absolute mt-[150px]"
            />


            <div ref={elementRef} className="flex overflow-x-auto gap-8 
            scrollbar-none scroll-smooth pt-5 px-3 pb-5">
                {movieList.map((item, index) => (
                    <MovieCard movie={item} />
                ))}
            </div>
            <HiChevronRight className="text-[50px] text-white p-2 z-10 top-0 cursor-pointer
            hidden md:block absolute right-0 mt-[150px]"
                onClick={() => sliderRight(elementRef.current)} />
        </div>
    )
}

export default MovieList
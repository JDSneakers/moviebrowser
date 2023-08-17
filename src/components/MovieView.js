import { useState } from "react";
import Hero from "./Hero";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";


const MovieView = () => {
    const { id } = useParams();
    const [ movieDetails, setMovieDetails ] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8525f275655883c3b747797776123f1f&language=en-US`)
        .then(response => response.json())
        .then(data => { 
            setMovieDetails(data)
            setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return(
                <header className="bg-dark text-white p-5">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </header>
            )
        }


        let posterPath = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

        if (movieDetails) {
            
            if (movieDetails.poster_path) {
                posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            }

            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

  return renderMovieDetails()
};

export default MovieView;
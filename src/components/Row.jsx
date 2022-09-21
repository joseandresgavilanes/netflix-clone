import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "../axios"
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer'

import "../styles/Row.scss"


const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])  

    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request
      }
      fetchData()
    }, [fetchUrl])  

    const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "") 
      .then((url) => {
        const ulrParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl (ulrParams.get("v"))
      })
      .catch(error => console.log(error))
    }

      
    }

    console.log(movies);
    return (
    <div className='row' >
        <h2>{title}</h2>
        <div className="row_posters">
            {
                movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)} 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))
            }
        </div>
        { trailerUrl &&  <YouTube videoId={trailerUrl} /> }
    </div>
  )
}

export default Row
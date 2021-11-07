import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
//You can rename a default export
import instance from "../axios";
import "./Row.css";
// import movieTrailer from "movie-trailer";
//npm i movie-trailer
//npm i reat-youtube
const imgURL = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, settrailerURL] = useState("");

  //I used a useEffect hook so that jab bhi page render hou tou request load hou
  // and data pull hojaye
  useEffect(() => {
    //We can not use Async function in a useEffect so we do it in a special way by using an internal function

    async function fetchData() {
      const request = await instance.get(props.fetchURL);
      //Putting the data in the movies array
      setMovies(request.data.results);
    }
    fetchData();
    //We have to put the variable/stuff we are importing in the useEffect as it will rerender the page when ever that variable changes
  }, [props.fetchURL]);

  //For React Youtube
  const options = {
    height: "300",
    width: "100%",
    playerVars: {
      //        // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log("fired");
    settrailerURL("x_me3xsvDgk");
    if (trailerURL) {
      settrailerURL("");
    }
  };

  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="row-posters">
          {/*container with posters*/}
          {movies.map((movie) => (
            <>
              <img
                key={movie.id}
                className={`row-poster ${props.islargerow && "LargePoster"}`}
                src={`${imgURL}${
                  props.islargerow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
              <br />
            </>
          ))}
        </div>
      </div>
      <div>{trailerURL && <YouTube videoId={trailerURL} opts={options} />}</div>
    </>
  );
}

export default Row;

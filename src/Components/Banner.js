import React, { useState, useEffect } from "react";
import instance from "../axios";
import requests from "../requests";
import "../Components/Banner.css";
import Fader from "../Fader";
const imgURL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      let randompickker = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randompickker]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    //If the number of characters is greater than N then truncate the latter and replace with ... if not then return back the string
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url("${imgURL}${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-des">{truncate(movie?.overview, 160)}</h1>
        </div>
        <Fader />
      </div>
    </>
  );
}

export default Banner;

import react from "react";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import "./App.css";
import Fader from "./Fader";
import Footer from "./Components/Footer";
//The fetchURL is from the request.js funcional module we set up earlier
function App() {
  const APIKEY = "1f4d0a65a1802939f722b1b1c06e2cad";
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchDocumentarie: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  };
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          islargerow
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
        />
        <Row
          islargerow
          title="Trending Now"
          fetchURL={requests.fetchTrending}
        />
        <Row islargerow title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentarie} />
        <Footer />
      </div>
    </>
  );
}

export default App;

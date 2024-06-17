import React from "react";
import movieContext from "../context/movieContext";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
const Movie = () => {
    const Navigate=useNavigate()
    let movies=useContext(movieContext)
    console.log(movies)
  return (
    <div>
        <button onClick={()=>{
            Navigate("/page1")
        }}>goto Page1</button>
      <h1>Movies</h1>
      <h2>you can add some movie frome page 1</h2>
      <h4>These movies are  {movies.movies} </h4>
      <p>
        Welcome to Our Movie Hub - Dive into the world of cinema with us!
        Discover the Latest Blockbusters - Explore our curated selection of the
        hottest new releases. Classic Films Reimagined - Revisit timeless
        favorites and discover new interpretations. Genre Spotlight - From
        action-packed adventures to heartwarming dramas, find your favorite
        genre. Critically Acclaimed - Explore films that have captivated
        audiences and critics alike. Behind the Scenes - Delve into the making
        of your favorite movies with exclusive content. Director's Vision -
        Learn about the creative minds behind the camera and their unique
        perspectives. Explore Film Festivals - Stay updated on the latest from
        prestigious film festivals around the globe. Celebrate Cinema - Join us
        in celebrating the art and magic of filmmaking. Connect with Fellow
        Movie Buffs - Engage with a community of passionate film enthusiasts.
        Feel free to adapt and expand upon these lines based on the specific
        focus and tone of your movie page.
      </p>
    </div>
  );
};


export default Movie;

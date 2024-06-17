import React, { useState } from "react";
import movieContext from "./movieContext";
const Movieprovider=(props)=>{

    let[movies,setmovies]=useState("tumbin");




    return(
        <movieContext.Provider value={{
            movies:movies,
            setmovies:setmovies,
        }}> {props.children}</movieContext.Provider>
    )
}

export default Movieprovider;
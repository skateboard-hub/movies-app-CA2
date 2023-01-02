import React, { useState } from "react";
import { login, signup, getMovie } from "../api/movies-api";
import { getFavourites } from "../api/movies-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [playlist, setplaylist] = useState( [] )
  const [knownFor, setKnownFor] = useState( [] )

  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setplaylist(newPlaylist)
    console.log(playlist);
  } ;
  const addKnownFor = (people) => {
    let newKnownFor = people.known_for;
    setKnownFor(newKnownFor)
  };

  //console.log(myReviews);
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  //AuContext
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token);
      setIsAuthenticated(true);
      setUserName(username);
      getFavourites(username)
      .then((response) => {
          const ids = response.map((response)=>
            response.id
          ) 
          
          setFavorites(ids)
          
      })

    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
    setFavorites([]);
  }

  
  return (
    <MoviesContext.Provider
      value={{
        knownFor,
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addPlaylist,
        addKnownFor,
        addToFavorites,
        setFavorites,
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

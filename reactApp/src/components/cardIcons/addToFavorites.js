import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {addFavourite} from "../../api/movies-api"

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const isAuthenticated = context.isAuthenticated;
  const handleAddToFavorites = (e) => {
    context.addToFavorites(movie);
    addFavourite(context.userName,movie.id);
  };
  ;
  return (
    <>
      {isAuthenticated ? (
        <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>) : (<></>)}

    </>
  );
};

export default AddToFavoritesIcon;
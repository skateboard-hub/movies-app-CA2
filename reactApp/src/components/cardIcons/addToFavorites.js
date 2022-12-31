import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const isAuthenticated = context.isAuthenticated;
  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(movie);
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
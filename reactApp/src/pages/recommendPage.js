import React, { useContext, useState } from "react";
import { getMovies, getMovieById } from "../api/movies-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useParams } from 'react-router-dom';
import { MoviesContext } from "../contexts/moviesContext";

const RecommendPage = (props) => {
  const [favoriteGenres, setFavoriteGenres] = useState([])
  const context = useContext(MoviesContext);
  const { page } = useParams();
  const { data: pages, error, isLoading, isError } = useQuery(
    ["RecommendPage"],
    getMovies
  );
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  var movies = pages;

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  console.log(context.favorites)
  console.log(context.favorites.length)
  if (context.favorites!=[]){
    var index = context.favorites[context.favorites.length-1]
      getMovieById(index)
        .then((index) => {
          const genreIds = index.genres.map((response) =>
            response.id
          )
          setFavoriteGenres(genreIds)
  
        }
      )
  }
  
  

  function compare(arr1,arr2){
    let result = false;
    for(var item of arr1){
    if(arr2.includes(item)){
        result = true;
    }
    return result
}
  }

  const a = movies.filter((movie) => {
    return compare(favoriteGenres,movie.genre_ids)
})

  return (
    <>
      <PageTemplate
        title="Recommend Movies"
        movies={a}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
    </>
  );
};
export default RecommendPage;
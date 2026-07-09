import React from "react";
import MovieCard from "./MovieCard";

function MovieList({
  movies,
  favourites,
  toggleFavourite
}) {

  if (movies.length === 0) {
    return (
      <p className="empty">
        No movies found.
      </p>
    );
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </>
  );
}

export default MovieList;
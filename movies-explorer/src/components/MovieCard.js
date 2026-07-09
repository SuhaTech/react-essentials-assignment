import React from "react";

function MovieCard({ movie, toggleFavourite, favourites }) {
  const isFavourite = favourites.includes(movie.id);

  return (
    <div className="movie-card">

      <div className="movie-left">

        <h3>{movie.title}</h3>

        <p className="movie-info">
          {movie.year} • {movie.genre}
        </p>

        <div className="rating">
          ⭐ {movie.rating}
        </div>

        <div className="tags">
          {movie.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

      </div>

      <button
        className={isFavourite ? "fav active" : "fav"}
        onClick={() => toggleFavourite(movie.id)}
      >
        {isFavourite ? "❤️ Favourited" : "🤍 Favourite"}
      </button>

    </div>
  );
}

export default MovieCard;
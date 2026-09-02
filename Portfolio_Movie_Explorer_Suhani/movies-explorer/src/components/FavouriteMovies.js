import React from "react";

function FavouriteMovies({ favouriteMovies }) {

  return (

    <div className="fav-section">

      <h2>⭐ Favourite Movies</h2>

      {favouriteMovies.length === 0 ? (

        <p className="empty">
          No favourite movies yet.
        </p>

      ) : (

        favouriteMovies.map((movie) => (

          <div
            className="fav-item"
            key={movie.id}
          >
            ⭐ {movie.title}
          </div>

        ))

      )}

    </div>

  );

}

export default FavouriteMovies;
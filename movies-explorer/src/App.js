import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavouriteMovies from "./components/FavouriteMovies";

import movies from "./data/movies";

function App() {
  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // Search State
  const [search, setSearch] = useState("");

  // Favourite Movies State
  const [favourites, setFavourites] = useState([]);

  // Filter Movies
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Add / Remove Favourite
  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((movieId) => movieId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  // Favourite Movie Objects
  const favouriteMovies = movies.filter((movie) =>
    favourites.includes(movie.id)
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        {/* Header */}
        <Header
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Result Count */}
        <p className="result-count">
          {search === ""
            ? `Showing ${movies.length} Movies`
            : `${filteredMovies.length} Result(s) Found`}
        </p>

        {/* Main Content */}
        <div className="content">

          {/* Left Section */}
          <div className="left">

            <h2>Matching Movies</h2>

            {search !== "" && filteredMovies.length === 0 ? (

              <p className="empty">
                No matching movies found.
              </p>

            ) : (

              <MovieList
                movies={search === "" ? movies : filteredMovies}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
              />

            )}

          </div>

          {/* Right Section */}
          <div className="right">

            <FavouriteMovies
              favouriteMovies={favouriteMovies}
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movieDetail";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <div className="App">
      <Router>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route
            index
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setFavourites={setFavourites}
                favourites={favourites}
              />
            }
          ></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route
            path="movies/:type"
            element={
              <MovieList
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleFavouriteClick={addFavouriteMovie}
                favourites={favourites}
              />
            }
          ></Route>
          <Route
            path="movies/search/:query"
            element={
              <MovieList
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleFavouriteClick={addFavouriteMovie}
                favourites={favourites}
              />
            }
          ></Route>
          <Route
            path="movies/favourites"
            element={
              <MovieList
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleFavouriteClick={addFavouriteMovie}
                favourites={favourites}
              />
            }
          ></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

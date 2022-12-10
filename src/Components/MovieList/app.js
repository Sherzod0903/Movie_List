import MovieListItem from "../MovieListitem/app";
import "./movie-list.css";

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </div>
  );
};
export default MovieList;

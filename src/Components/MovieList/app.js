import MovieListItem from "../MovieListitem/app";
import "./movie-list.css";

const MovieList = ({ data, onDelete }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};
export default MovieList;

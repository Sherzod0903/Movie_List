import "./app.css";
const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-dark">
        All Movies
      </button>
      <button type="button" className="btn btn-outline-dark">
        Famous Movies
      </button>
      <button type="button" className="btn btn-outline-dark">
        Most Seen Movies
      </button>
    </div>
  );
};
export default AppFilter;

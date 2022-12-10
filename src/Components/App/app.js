import AppFilter from "../App-filter/app";
import AppInfo from "../App-info/app";
import AddMovie from "../Movie-add-form/app";
import MovieList from "../MovieList/app";
import AppSearch from "../search-panel/app";
import "./app.css";

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="context">
        <AppInfo />

        <div className="search-panel">
          <AppSearch />

          <AppFilter />
        </div>
        <MovieList />
        <AddMovie />
      </div>
    </div>
  );
};
export default App;

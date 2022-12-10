import AppFilter from "../App-filter/app";
import AppInfo from "../App-info/app";
import AddMovie from "../Movie-add-form/app";
import MovieList from "../MovieList/app";
import AppSearch from "../search-panel/app";
import "./app.css";

const App = () => {
  const data = [
    { name: "Golden Time", viewers: 999, favourite: false },
    { name: "Al-Kharazmiy", viewers: 999, favourite: true },
    { name: "Avatar", viewers: 399, favourite: false },
    { name: "Uzbek", viewers: 999, favourite: false },
  ];
  return (
    <div className="app font-monospace">
      <div className="context">
        <AppInfo />

        <div className="search-panel">
          <AppSearch />

          <AppFilter />
        </div>
        <MovieList data={data} />
        <AddMovie />
      </div>
    </div>
  );
};
export default App;

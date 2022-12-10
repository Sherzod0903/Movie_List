import AppFilter from "../App-filter/app";
import AppInfo from "../App-info/app";
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
      </div>
    </div>
  );
};
export default App;

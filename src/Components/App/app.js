import { Component } from "react";
import AppFilter from "../App-filter/app";
import AppInfo from "../App-info/app";
import AddMovie from "../Movie-add-form/app";
import MovieList from "../MovieList/app";
import AppSearch from "../search-panel/app";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Golden Time", viewers: 999, favourite: false },
        { id: 2, name: "Al-Kharazmiy", viewers: 999, favourite: true },
        { id: 3, name: "Avatar", viewers: 399, favourite: false },
        { id: 4, name: "Uzbek", viewers: 999, favourite: false },
      ],
    };
  }

  onAdd = (item) => {
    this.setState(({ data }) => ({
      data: [...data, { ...item, favourite: false, id: Date() }],
    }));
  };

  render() {
    const onDelete = (id) => {
      const newArr = data.filter((item) => item.id !== id);
      this.setState({ data: newArr });
    };
    const { data } = this.state;
    const watChed = data.length;
    const favouRite = data.filter((c) => c.favourite).length;
    return (
      <div className="app font-monospace">
        <div className="context">
          <AppInfo favouRite={favouRite} watChed={watChed} />

          <div className="search-panel">
            <AppSearch />

            <AppFilter />
          </div>
          <MovieList onDelete={onDelete} data={data} />
          <AddMovie onAdd={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default App;

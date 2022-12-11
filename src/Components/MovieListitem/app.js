import "./movie-list-item.css";
import { Component } from "react";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }
  render() {
    const { name, viewers, onDelete } = this.props;
    const { favourite, like } = this.state;

    const onFavourite = () => {
      this.setState(({ favourite }) => ({
        favourite: !favourite,
      }));
    };
    const onLike = () => {
      this.setState(({ like }) => ({
        like: !like,
      }));
    };
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && "favourite"
        } ${like && "like"} `}>
        <span onClick={onLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onFavourite}
            type="button"
            className="btn-cookie btn-sm">
            <i className="fas fa-cookie"></i>
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="btn-cookie btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default MovieListItem;

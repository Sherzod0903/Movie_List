import { Component } from "react";
import "./add.css";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onAddhandler = (e) => {
    e.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      viewers: this.state.viewers,
      id: Date(),
    });
    this.setState({
      name: "",
      viewers: "",
    });
  };
  render() {
    const { name, viewers } = this.state;
    return (
      <div className="app-info">
        <h3>Add New Movie</h3>
        <form className="add-form d-flex " onSubmit={this.onAddhandler}>
          <input
            onChange={this.changeHandler}
            name="name"
            value={name}
            type="text"
            className="form-control search-input "
            placeholder="What movie?"
          />
          <input
            onChange={this.changeHandler}
            name="viewers"
            type="text"
            value={viewers}
            className="form-control search-input "
            placeholder="How many times seen?"
          />
          <button type="submit" className="btn btn-outline-dark">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddMovie;

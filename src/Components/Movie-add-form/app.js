import "./add.css";

const AddMovie = () => {
  return (
    <div className="app-info">
      <h3>Add New Movie</h3>
      <form className="add-form d-flex ">
        <input
          type="text"
          className="form-control search-input "
          placeholder="What movie?"
        />
        <input
          type="number"
          className="form-control search-input "
          placeholder="How many times seen?"
        />
        <button type="submit" className="btn btn-outline-dark">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddMovie;

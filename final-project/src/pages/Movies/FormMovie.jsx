import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Link, useHistory, useParams } from "react-router-dom";

const FormMovie = () => {
  let history = useHistory();
  const { input, setInput, currentIndex, setCurrentIndex, functions } =
    useContext(MovieContext);

  const { functionSubmit, functionUpdate, functionEdit } = functions;

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      functionEdit(id);
    }

    return () => {
      setInput({
        title: "",
        description: "",
        year: 0,
        duration: 0,
        genre: "",
        rating: 0,
        review: "",
        image_url: "",
      });
      setCurrentIndex(-1);
    };
  }, []);

  const handleChange = (e) => {
    let typeofValue = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: typeofValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentIndex === -1) {
      functionSubmit();
    } else {
      functionUpdate();
    }
    setInput({
      title: "",
      description: "",
      year: 0,
      duration: 0,
      genre: "",
      rating: 0,
      review: "",
      image_url: "",
    });
    setCurrentIndex(-1);
    history.push("/table-movie");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Form Movie</h1>
      <Link to="/table-movie">
        <button
          style={{
            backgroundColor: "#1890ff",
            color: "white",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Back to Table
        </button>
      </Link>
      <div className="container-form">
        <form onSubmit={handleSubmit} method="post">
          <label>Title</label>
          <input
            onChange={handleChange}
            value={input.title}
            type="text"
            name="title"
            placeholder="Title Movie"
            required
          />

          <label>Description</label>
          <textarea
            onChange={handleChange}
            value={input.description}
            type="text"
            name="description"
            rows="3"
            placeholder=""
            required
          />

          <label>Year</label>
          <input
            onChange={handleChange}
            value={input.year}
            type="number"
            name="year"
            placeholder=""
            required
            min="1990"
            max="2022"
          />

          <label>Duration (minute)</label>
          <input
            onChange={handleChange}
            value={input.duration}
            type="number"
            name="duration"
            placeholder=""
            required
          />

          <label>Genre</label>
          <input
            onChange={handleChange}
            value={input.genre}
            type="text"
            name="genre"
            placeholder=""
            required
          />

          <label>Rating</label>
          <input
            onChange={handleChange}
            value={input.rating}
            type="number"
            name="rating"
            placeholder=""
            required
            min="0"
            max="10"
          />

          <label>Review</label>
          <textarea
            onChange={handleChange}
            value={input.review}
            type="text"
            name="review"
            rows="3"
            placeholder=""
            required
          />

          <label>Image Url</label>
          <input
            onChange={handleChange}
            value={input.image_url}
            type="text"
            name="image_url"
            placeholder=""
            required
          />

          <input type="submit" value="Submit" />

          <br></br>
        </form>
      </div>
    </>
  );
};

export default FormMovie;

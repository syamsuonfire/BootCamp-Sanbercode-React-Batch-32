import React, { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import { Link, useHistory, useParams } from "react-router-dom";

const FormGame = () => {
  let history = useHistory();
  const { input, setInput, currentIndex, setCurrentIndex, functions } =
    useContext(GameContext);

  const { functionSubmit, functionUpdate, functionEdit } = functions;

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      functionEdit(id);
    }

    return () => {
      setInput({
        name: "",
        genre: "",
        singlePlayer: true,
        multiplayer: true,
        release_year: "",
        platform: "",
        release: "",
        image_url: "",
      });
      setCurrentIndex(-1);
    };
  }, []);

  const handleChange = (e) => {
    let typeofValue = e.target.value;
    let name = e.target.name;
    let platform = ["singlePlayer", "multiplayer"];

    if (platform.indexOf(name) === -1) {
      setInput({ ...input, [name]: typeofValue });
    } else {
      setInput({ ...input, [name]: !input[name] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentIndex === -1) {
      functionSubmit();
    } else {
      functionUpdate();
    }
    setInput({
      name: "",
      genre: "",
      singlePlayer: true,
      multiplayer: true,
      release_year: "",
      platform: "",
      release: "",
      image_url: "",
    });
    setCurrentIndex(-1);
    history.push("/table-game");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Form Game</h1>
      <Link to="/table-game">
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
          <label>Name</label>
          <input
            onChange={handleChange}
            value={input.name}
            type="text"
            name="name"
            placeholder="Name Game"
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

          <label>Single Player</label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="singlePlayer"
            checked={input.singlePlayer}
          />

          <label>Multi Player</label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="multiplayer"
            checked={input.multiplayer}
          />

          <label>Platform</label>
          <input
            onChange={handleChange}
            value={input.platform}
            type="text"
            name="platform"
            placeholder=""
            required
          />

          <label>Release</label>
          <input
            onChange={handleChange}
            value={input.release}
            type="text"
            name="release"
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

export default FormGame;

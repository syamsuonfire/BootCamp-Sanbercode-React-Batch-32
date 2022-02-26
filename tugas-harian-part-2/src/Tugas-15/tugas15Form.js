import React, { useContext, useEffect } from "react";
import { DataMahasiswaContext } from "../context/dataMahasiswaContext";
import "../Tugas-13/tugas13.css";
import { Link, useHistory, useParams } from "react-router-dom";

const Tugas15Form = () => {
  let history = useHistory();
  const { input, setInput, currentIndex, setCurrentIndex, functions, success } =
    useContext(DataMahasiswaContext);

  const { functionSubmit, functionUpdate, functionEdit } = functions;

  const { slug } = useParams();

  useEffect(() => {
    if (slug !== undefined) {
      functionEdit(slug);
    }

    return () => {
      setInput({
        name: "",
        course: "",
        score: 0,
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
      name: "",
      course: "",
      score: 0,
    });
    setCurrentIndex(-1);
    history.push("/tugas15");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Form Nilai Mahasiswa</h1>
      <Link to="/tugas15">
        <button
          style={{
            marginLeft: "190px",
            backgroundColor: "#04aa6d",
            color: "white",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Kembali ke Tabel
        </button>
      </Link>
      <div className="container-form">
        <form onSubmit={handleSubmit} method="post">
          <label>Nama</label>
          <input
            onChange={handleChange}
            value={input.name}
            type="text"
            name="name"
            placeholder="Your name.."
            required
          />

          <label>Mata Kuliah</label>
          <input
            onChange={handleChange}
            value={input.course}
            type="text"
            name="course"
            placeholder=""
            required
          />

          <label>Nilai</label>
          <input
            onChange={handleChange}
            value={input.score}
            type="number"
            name="score"
            placeholder=""
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Tugas15Form;

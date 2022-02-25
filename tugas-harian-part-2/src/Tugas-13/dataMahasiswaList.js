import React, { useContext, useEffect } from "react";
import { DataMahasiswaContext } from "../context/dataMahasiswaContext";
import "./tugas13.css";

const DataMahasiswaList = () => {
  const {
    dataMahasiswa,
    setDataMahasiswa,
    input,
    setInput,
    currentIndex,
    setCurrentIndex,
    functions,
    fetchStatus,
    setFetchStatus,
  } = useContext(DataMahasiswaContext);

  const {
    fetchData,
    functionDelete,
    functionSubmit,
    functionUpdate,
    functionEdit,
    handleText,
  } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (e) => {
    let idPeserta = parseInt(e.target.value);
    functionDelete(idPeserta);
  };

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
  };

  const handleEdit = (e) => {
    let idPeserta = parseInt(e.target.value);
    functionEdit(idPeserta);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Daftar Nilai Mahasiswa</h1>
      <table id="tablemahasiswa">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataMahasiswa !== null && (
            <>
              {dataMahasiswa.map((res) => {
                return (
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td>{res.course}</td>
                    <td>{res.score}</td>
                    <td>{handleText(res.score)}</td>
                    <td>
                      <button onClick={handleEdit} value={res.id}>
                        edit
                      </button>
                      <button onClick={handleDelete} value={res.id}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      <br />
      <h1 style={{ textAlign: "center" }}>Form Nilai Mahasiswa</h1>
      <div className="container-form">
        <form onSubmit={handleSubmit} method="post">
          <label>Nama</label>
          <input
            onChange={handleChange}
            value={input.name}
            type="text"
            name="name"
            placeholder="Your name.."
          />

          <label>Mata Kuliah</label>
          <input
            onChange={handleChange}
            value={input.course}
            type="text"
            name="course"
            placeholder=""
          />

          <label>Nilai</label>
          <input
            onChange={handleChange}
            value={input.score}
            type="number"
            name="score"
            placeholder=""
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default DataMahasiswaList;

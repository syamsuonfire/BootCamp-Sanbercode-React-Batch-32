import React, { useEffect, useState } from "react";
import "./tugas12.css";
import axios from "axios";

const Tugas12 = () => {
  const [dataMahasiswa, setDataMahasiswa] = useState([]);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(
        "http://backendexample.sanbercloud.com/api/student-scores"
      );
      let data = result.data;
      let output = data.map((e) => {
        return {
          id: e.id,
          name: e.name,
          course: e.course,
          score: e.score,
        };
      });

      setDataMahasiswa(output);
    };
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }

    // axios
    //   .get("http://backendexample.sanbercloud.com/api/student-scores")
    //   .then((e) => {
    //     console.log(e);
    //   });
  }, [fetchStatus, setFetchStatus]);

  const handleChange = (e) => {
    let typeofValue = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: typeofValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { name, course, score } = input;

    if (currentIndex === -1) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/student-scores`, {
          name,
          course,
          score,
        })
        .then((res) => {
          setFetchStatus(true);
          // let newData = [
          //   ...dataMahasiswa,
          //   {
          //     id: res.data.id,
          //     name,
          //     course,
          //     score,
          //   },
          // ];
          // setDataMahasiswa(newData);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/student-scores/${currentIndex}`,
          {
            name,
            course,
            score,
          }
        )
        .then((res) => {
          setFetchStatus(true);
          // let updatedItem = dataMahasiswa.find((e) => e.id === currentIndex);
          // updatedItem.name = res.data.name;
          // updatedItem.course = res.data.course;
          // updatedItem.score = res.data.score;
          // setDataMahasiswa([...dataMahasiswa]);
        });
    }

    setInput({
      name: "",
      course: "",
      score: 0,
    });
    setCurrentIndex(-1);
  };

  const handleDelete = (e) => {
    let idPeserta = parseInt(e.target.value);

    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`
      )
      .then(() => {
        setFetchStatus(true);
        // let newData = dataMahasiswa.filter((e) => {
        //   return e.id !== idPeserta;
        // });
        // setDataMahasiswa(newData);
      });
  };

  const handleEdit = (e) => {
    let idPeserta = parseInt(e.target.value);

    axios
      .get(
        `http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`
      )
      .then((res) => {
        let data = res.data;

        setInput({
          name: data.name,
          course: data.course,
          score: data.score,
        });
        setCurrentIndex(data.id);
      });
  };

  const handleText = (param) => {
    let nilai = param;

    if (nilai >= 80) {
      return "A";
    } else if (nilai >= 70 && nilai < 80) {
      return "B";
    } else if (nilai >= 60 && nilai < 70) {
      return "C";
    } else if (nilai >= 50 && nilai < 60) {
      return "D";
    } else if (nilai < 50) {
      return "E";
    }
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

export default Tugas12;

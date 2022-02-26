import axios from "axios";
import React, { createContext, useState } from "react";

export const DataMahasiswaContext = createContext();

export const DataMahasiswaProvider = (props) => {
  const [dataMahasiswa, setDataMahasiswa] = useState([]);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(-1);
  let { name, course, score } = input;
  const [fetchStatus, setFetchStatus] = useState(true);
  const [theme, setTheme] = useState([
    { backgroundColor: "white" },
    { color: "#333" },
  ]);

  const fetchData = async () => {
    let result = await axios.get(
      "http://backendexample.sanbercloud.com/api/student-scores"
    );
    let data = result.data;

    let output = data.map((e) => {
      let indexScore = handleText(e.score);
      return {
        id: e.id,
        name: e.name,
        course: e.course,
        score: e.score,
        indexScore,
      };
    });

    setDataMahasiswa(output);
  };

  const functionDelete = (params) => {
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${params}`
      )
      .then(() => {
        setFetchStatus(true);
        // let newData = dataMahasiswa.filter((e) => {
        //   return e.id !== params;
        // });
        // setDataMahasiswa(newData);
      });
  };

  const functionSubmit = (params) => {
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
  };

  const functionUpdate = (params) => {
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
  };

  const functionEdit = (params) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/student-scores/${params}`)
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

  const handleTheme = () => {
    if (theme[0].backgroundColor === "white") {
      setTheme([{ backgroundColor: "#333" }, { color: "white" }]);
    } else if (theme[0].backgroundColor === "#333") {
      setTheme([{ backgroundColor: "white" }, { color: "#333" }]);
    }
  };

  const functions = {
    fetchData,
    functionDelete,
    functionSubmit,
    functionUpdate,
    functionEdit,
    handleText,
    handleTheme,
  };

  return (
    <DataMahasiswaContext.Provider
      value={{
        dataMahasiswa,
        setDataMahasiswa,
        input,
        setInput,
        currentIndex,
        setCurrentIndex,
        functions,
        fetchStatus,
        setFetchStatus,
        theme,
      }}
    >
      {props.children}
    </DataMahasiswaContext.Provider>
  );
};

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

  const functionDelete = (params) => {
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${params}`
      )
      .then(() => {
        let newData = dataMahasiswa.filter((e) => {
          return e.id !== params;
        });
        setDataMahasiswa(newData);
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
        let newData = [
          ...dataMahasiswa,
          {
            id: res.data.id,
            name,
            course,
            score,
          },
        ];
        setDataMahasiswa(newData);
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
        let updatedItem = dataMahasiswa.find((e) => e.id === currentIndex);
        updatedItem.name = res.data.name;
        updatedItem.course = res.data.course;
        updatedItem.score = res.data.score;
        setDataMahasiswa([...dataMahasiswa]);
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

  const functions = {
    fetchData,
    functionDelete,
    functionSubmit,
    functionUpdate,
    functionEdit,
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
      }}
    >
      {props.children}
    </DataMahasiswaContext.Provider>
  );
};

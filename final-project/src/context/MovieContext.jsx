import axios from "axios";
import React, { createContext, useState } from "react";
import { message } from "antd";
import Cookies from "js-cookie";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: 0,
    duration: 0,
    genre: "",
    rating: 0,
    review: "",
    image_url: "",
  });

  const success = (params) => {
    switch (params) {
      case "created":
        message.success("Movie berhasil ditambahkan!");
        break;

      case "updated":
        message.success("Movie berhasil diperbaharui!");
        break;

      case "deleted":
        message.success("Movie berhasil dihapus!");
        break;

      default:
        message.warning("This is a warning message");
        break;
    }
  };
  const [currentIndex, setCurrentIndex] = useState(-1);

  let { title, description, year, duration, genre, rating, review, image_url } =
    input;

  const [fetchStatus, setFetchStatus] = useState(true);

  const fetchData = async () => {
    let result = await axios.get(
      "https://backendexample.sanbersy.com/api/data-movie"
    );
    let data = result.data;

    let output = data.map((e) => {
      return {
        id: e.id,
        title: e.title,
        description: e.description,
        year: e.year,
        duration: e.duration,
        genre: e.genre,
        rating: e.rating,
        review: e.review,
        image_url: e.image_url,
      };
    });

    setMovies(output);
  };

  const functionSubmit = () => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-movie`,
        {
          title,
          description,
          year,
          duration,
          genre,
          rating,
          review,
          image_url,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      )
      .then((res) => {
        setFetchStatus(true);
        success("created");
      });
  };

  const functionUpdate = () => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-movie/${currentIndex}`,
        {
          title,
          description,
          year,
          duration,
          genre,
          rating,
          review,
          image_url,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      )
      .then((res) => {
        setFetchStatus(true);
        success("updated");
      });
  };

  const functionEdit = (params) => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${params}`)
      .then((res) => {
        let data = res.data;

        setInput({
          title: data.title,
          description: data.description,
          year: data.year,
          duration: data.duration,
          genre: data.genre,
          rating: data.rating,
          review: data.review,
          image_url: data.image_url,
        });
        setCurrentIndex(data.id);
      });
  };

  const functions = {
    fetchData,
    functionSubmit,
    functionUpdate,
    functionEdit,
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        input,
        setInput,
        currentIndex,
        setCurrentIndex,
        functions,
        fetchStatus,
        setFetchStatus,
        success,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

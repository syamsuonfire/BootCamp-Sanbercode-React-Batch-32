import axios from "axios";
import React, { createContext, useState } from "react";
import { message } from "antd";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const [games, setGames] = useState([]);
  const [input, setInput] = useState({
    name: "",
    genre: "",
    singlePlayer: null,
    multiplayer: null,
    release_year: "",
    platform: "",
    release: "",
    image_url: "",
  });

  const success = (params) => {
    switch (params) {
      case "created":
        message.success("Data berhasil ditambahkan!");
        break;

      case "updated":
        message.success("Data berhasil diperbaharui!");
        break;

      case "deleted":
        message.success("Data berhasil dihapus!");
        break;

      default:
        message.warning("This is a warning message");
        break;
    }
  };
  const [currentIndex, setCurrentIndex] = useState(-1);

  let { name, genre, singlePlayer, multiplayer, platform, release, image_url } =
    input;

  const [fetchStatus, setFetchStatus] = useState(true);

  const fetchData = async () => {
    let result = await axios.get(
      "https://backendexample.sanbersy.com/api/data-game"
    );
    let data = result.data;

    let output = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        genre: e.genre,
        singlePlayer: e.singlePlayer,
        multiplayer: e.multiplayer,
        platform: e.platform,
        release: e.release,
        image_url: e.image_url,
      };
    });

    setGames(output);
  };

  const functionDelete = (params) => {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${params}`)
      .then(() => {
        setFetchStatus(true);
        success("deleted");
      });
  };

  const functionSubmit = () => {
    axios
      .post(`https://backendexample.sanbersy.com/api/data-game`, {
        name,
        genre,
        singlePlayer,
        multiplayer,
        platform,
        release,
        image_url,
      })
      .then((res) => {
        setFetchStatus(true);
        success("created");
      });
  };

  const functionUpdate = () => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${currentIndex}`,
        {
          name,
          genre,
          singlePlayer,
          multiplayer,
          platform,
          release,
          image_url,
        }
      )
      .then((res) => {
        setFetchStatus(true);
        success("updated");
      });
  };

  const functionEdit = (params) => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${params}`)
      .then((res) => {
        let data = res.data;

        setInput({
          name: data.name,
          genre: data.genre,
          singlePlayer: data.singlePlayer,
          multiplayer: data.multiplayer,
          platform: data.platform,
          release: data.release,
          image_url: data.image_url,
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
    <GamesContext.Provider
      value={{
        games,
        setGames,
        input,
        setInput,
        currentIndex,
        setCurrentIndex,
        functions,
        fetchStatus,
        setFetchStatus,
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

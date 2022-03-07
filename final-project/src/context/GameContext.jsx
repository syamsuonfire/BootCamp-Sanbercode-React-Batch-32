import axios from "axios";
import React, { createContext, useState } from "react";
import { message } from "antd";
import Cookies from "js-cookie";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);
  const [input, setInput] = useState({
    name: "",
    genre: "",
    singlePlayer: true,
    multiplayer: true,
    release_year: "",
    platform: "",
    release: "",
    image_url: "",
  });

  const success = (params) => {
    switch (params) {
      case "created":
        message.success("Game berhasil ditambahkan!");
        break;

      case "updated":
        message.success("Game berhasil diperbaharui!");
        break;

      case "deleted":
        message.success("Game berhasil dihapus!");
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

  const functionSubmit = () => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-game`,
        {
          name,
          genre,
          singlePlayer,
          multiplayer,
          platform,
          release,
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
        `https://backendexample.sanbersy.com/api/data-game/${currentIndex}`,
        {
          name,
          genre,
          singlePlayer,
          multiplayer,
          platform,
          release,
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
    functionSubmit,
    functionUpdate,
    functionEdit,
  };

  return (
    <GameContext.Provider
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
        success,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

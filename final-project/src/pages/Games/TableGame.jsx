import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Table, Space, Popconfirm, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { GameContext } from "../../context/GameContext";
import Cookies from "js-cookie";

const TableGame = () => {
  const { games, setGames, success } = useContext(GameContext);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const data = [];

  const columns = [
    {
      title: "No",
      width: 70,
      dataIndex: "number",
      key: "number",
      sorter: (a, b) => a.number - b.number,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.length - b.Name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Genre",
      dataIndex: "Genre",
      key: "Genre",
      sorter: (a, b) => a.Genre.length - b.Genre.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Release",
      dataIndex: "Release",
      key: "Release",
      sorter: (a, b) => a.Release - b.Release,
    },
    {
      title: "Platform",
      dataIndex: "Platform",
      key: "Platform",
      sorter: (a, b) => a.Platform.length - b.Platform.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Single Player",
      dataIndex: "SinglePlayer",
      key: "SinglePlayer",
      sorter: (a, b) => a.SinglePlayer.length - b.SinglePlayer.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Multi Player",
      dataIndex: "multiplayer",
      key: "multiplayer",
      sorter: (a, b) => a.multiplayer.length - b.multiplayer.length,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Action",
      key: "operation",
      dataIndex: "action",
      fixed: "right",
      width: 130,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        setGames(
          res.data.filter((item) =>
            item.genre === null
              ? item.genre
              : item.genre.toLowerCase().includes(genre.toLowerCase())
          )
        );
      });
  }, [genre]);

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        setGames(
          res.data.filter((item) =>
            item.platform === null
              ? item.platform
              : item.platform.toLowerCase().includes(platform.toLowerCase())
          )
        );
      });
  }, [platform]);

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        setGames(
          res.data.filter((item) =>
            item.release === null
              ? item.release
              : item.release
                  .toString()
                  .toLowerCase()
                  .includes(year.toLowerCase())
          )
        );
      });
  }, [year]);

  const handleDelete = (params) => {
    let idGame = params;

    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })

      .then((res) => {
        let newdataGame = games.filter((x) => x.id !== idGame);
        setGames([...newdataGame]);
        success("deleted");
      });
  };
  const submitSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let resGames = res.data.map((el) => {
          return {
            id: el.id,
            name: el.name,
            release: el.release,
            platform: el.platform,
            genre: el.genre,
            singlePlayer: el.singlePlayer,
            multiplayer: el.multiplayer,
            image_url: el.image_url,
          };
        });

        let filteredGames = resGames.filter(
          (x) => x.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
        setGames([...filteredGames]);
      });
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {games !== null &&
        games.map((item, index) => {
          // for (let i = 0; i < index; i++) {
          data.push({
            number: index + 1,
            image: (
              <img
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
                src={item.image_url}
                alt="Gambar"
              />
            ),
            Name: item.name,
            Genre: item.genre,
            Release: item.release,
            Platform: item.platform,
            SinglePlayer: item.singlePlayer === 1 ? "Yes" : "No",
            multiplayer: item.multiplayer === 1 ? "Yes" : "No",
            action: (
              <Space size="middle">
                <div>
                  <Link to={`/games/${item.id}`}>
                    <EyeOutlined style={{ color: "green" }} />
                  </Link>
                </div>
                <Link to={`/edit-game/${item.id}`}>
                  <EditOutlined />
                </Link>
                <Popconfirm
                  placement="topRight"
                  title={`Apakah kamu ingin menghapus ${item.name}?`}
                  onConfirm={() => {
                    handleDelete(item.id);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <div style={{ color: "red", cursor: "pointer" }}>
                    <DeleteOutlined />
                  </div>
                </Popconfirm>
              </Space>
            ),
          });
          // }
        })}
      <h2 style={{ textAlign: "center" }}>Table Game</h2>

      <h2>Filter</h2>
      <div style={{ width: "1000px" }}>
        <Input
          type="text"
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
          style={{ width: "300px" }}
        />
        <Input
          type="text"
          placeholder="Platform"
          onChange={(e) => setPlatform(e.target.value)}
          style={{ width: "300px", marginLeft: "20px" }}
        />
        <Input
          type="number"
          placeholder="Release Year"
          max={2020}
          min={1980}
          onChange={(e) => setYear(e.target.value)}
          style={{ width: "300px", marginLeft: "20px" }}
        />{" "}
        <br /> <br />
      </div>

      <br />

      <div style={{ float: "right", width: "400px" }}>
        <form onSubmit={submitSearch}>
          <Input
            type="text"
            placeholder="Search Name"
            value={search}
            onChange={handleChangeSearch}
            style={{ width: "250px" }}
          />{" "}
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={submitSearch}
          >
            Search
          </Button>
        </form>
      </div>
      <br />
      <br />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ x: 1500, y: 450 }}
      />
    </>
  );
};

export default TableGame;

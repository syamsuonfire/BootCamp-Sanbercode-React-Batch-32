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
import { MovieContext } from "../../context/MovieContext";
import Cookies from "js-cookie";

const TableMovie = () => {
  const { movies, setMovies, success } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [Genre, setGenre] = useState("");
  const [Rating, setRating] = useState("");
  const [release, setYear] = useState("");
  const data = [];

  function truncateString(str, num) {
    if (str === null) {
      return "";
    } else {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    }
  }
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
      title: "Tittle",
      dataIndex: "Tittle",
      key: "Tittle",
      sorter: (a, b) => a.Tittle.length - b.Tittle.length,
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
      dataIndex: "Year",
      key: "Year",
      sorter: (a, b) => a.Year - b.Year,
    },
    {
      title: "Duration",
      dataIndex: "Duration",
      key: "Duration",
      sorter: (a, b) => a.Duration - b.Duration,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      sorter: (a, b) => a.Rating - b.Rating,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Review",
      dataIndex: "Review",
      key: "Review",
      sorter: (a, b) => a.Review.length - b.Review.length,
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
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        setMovies(
          res.data.filter((item) =>
            item.genre === null
              ? item.genre
              : item.genre.toLowerCase().includes(Genre.toLowerCase())
          )
        );
      });
  }, [Genre]);
  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        setMovies(
          res.data.filter((item) =>
            item.rating === null
              ? item.rating
              : item.rating
                  .toString()
                  .toLowerCase()
                  .includes(Rating.toLowerCase())
          )
        );
      });
  }, [Rating]);
  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        setMovies(
          res.data.filter((item) =>
            item.year === null
              ? item.year
              : item.year
                  .toString()
                  .toLowerCase()
                  .includes(release.toLowerCase())
          )
        );
      });
  }, [release]);

  const handleDelete = (params) => {
    let idFilm = params;

    axios
      .delete(`https://backendexample.sanbersy.com/api/data-movie/${idFilm}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })

      .then((res) => {
        let newdataFilm = movies.filter((x) => x.id !== idFilm);
        setMovies([...newdataFilm]);
        success("deleted");
      });
  };
  const submitSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let resMovies = res.data.map((el) => {
          return {
            id: el.id,
            title: el.title,
            description: el.description,
            year: el.year,
            review: el.review,
            duration: el.duration,
            genre: el.genre,
            rating: el.rating,
            image_url: el.image_url,
          };
        });

        let filteredMovies = resMovies.filter(
          (x) => x.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
        setMovies([...filteredMovies]);
      });
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {movies !== null &&
        movies.map((item, index) => {
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
            Tittle: item.title,
            Genre: item.genre,
            Year: item.year,
            Duration: item.duration,
            Rating: item.rating,
            Description: truncateString(item.description, 20),
            Review: truncateString(item.review, 20),
            action: (
              <Space size="middle">
                <div>
                  <Link to={`/movies/${item.id}`}>
                    <EyeOutlined style={{ color: "green" }} />
                  </Link>
                </div>
                <Link to={`/edit-movie/${item.id}`}>
                  <EditOutlined />
                </Link>
                <Popconfirm
                  placement="topRight"
                  title={`Apakah kamu ingin menghapus ${item.title}?`}
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
      <h2 style={{ textAlign: "center" }}>Table Movie</h2>

      <h2>Filter</h2>
      <div style={{ width: "1000px" }}>
        <Input
          type="text"
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
          style={{ width: "300px" }}
        />
        <Input
          type="number"
          placeholder="Rating"
          max={10}
          min={0}
          onChange={(e) => setRating(e.target.value)}
          style={{ width: "300px", marginLeft: "20px" }}
        />
        <Input
          type="number"
          placeholder="Release Year"
          max={2020}
          min={1980}
          onChange={(e) => setYear(e.target.value)}
          style={{ width: "300px", marginLeft: "20px" }}
        />
      </div>

      <br />

      <div style={{ float: "right", width: "400px" }}>
        <form onSubmit={submitSearch}>
          <Input
            type="text"
            placeholder="Search Title"
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

export default TableMovie;

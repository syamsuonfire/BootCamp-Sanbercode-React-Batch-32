import React, { useState, useEffect } from "react";
import { Divider, Card } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendexample.sanbersy.com/api/data-movie")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        alert(err);
      });

    axios
      .get("https://backendexample.sanbersy.com/api/data-game")
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <Divider orientation="left">Now Playing</Divider>
      <div
        style={{
          overflow: "scroll",
          whiteSpace: "nowrap",
          marginBottom: 32,
        }}
      >
        {movies.map((res) => {
          return (
            <Link to={`/movies/${res.id}`}>
              <Card
                key={res.id}
                hoverable
                style={{
                  width: 240,
                  margin: 8,
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "normal",
                }}
                cover={
                  <img
                    alt="movie poster"
                    src={res.image_url}
                    style={{
                      height: 320,
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div
                  style={{
                    height: 120,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <h3>{res.title}</h3>
                  <p>{res.description}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
      <Divider orientation="left">Games Popular</Divider>
      <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
        {games.map((res) => {
          return (
            <Link to={`/games/${res.id}`}>
              <Card
                key={res.id}
                hoverable
                style={{
                  width: 240,
                  margin: 8,
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "normal",
                }}
                cover={
                  <img
                    alt="movie poster"
                    src={res.image_url}
                    style={{
                      height: 320,
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div
                  style={{
                    height: 120,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <h3>{res.name}</h3>
                  <p>{res.platform}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

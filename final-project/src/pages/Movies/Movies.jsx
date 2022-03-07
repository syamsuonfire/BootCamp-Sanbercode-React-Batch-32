import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import { List, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Movies = () => {
  const { movies, functions } = useContext(MovieContext);

  const { fetchData } = functions;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {movies !== null && (
        <List
          grid={{ gutter: 20, column: 4 }}
          dataSource={movies}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/movies/${item.id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={item.id}
                      src={item.image_url}
                      width="150px"
                      height="300px"
                    />
                  }
                >
                  <Meta title={item.name} />
                  <br />
                  <div>
                    {item.year}
                    {
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          float: "right",
                        }}
                      >
                        <Link to={`/movies/${item.id}`}>View More</Link>
                      </button>
                    }
                  </div>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default Movies;

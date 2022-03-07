import React, { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import { List, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Games = () => {
  const { games, functions, fetchStatus, setFetchStatus } =
    useContext(GameContext);

  const { fetchData } = functions;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {games !== null && (
        <List
          grid={{ gutter: 20, column: 4 }}
          dataSource={games}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/games/${item.id}`}>
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
                    {item.release}
                    {
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          float: "right",
                        }}
                      >
                        <Link to={`/games/${item.id}`}>View More</Link>
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

export default Games;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const DetailGame = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          message.error(
            "Tidak dapat mengambil Data, Mohon tunggu dan Periksa Koneksi Anda"
          );
        });
    }
  }, [data, setData]);

  return (
    <section>
      <h1>
        <strong style={{ fontWeight: "bold", fontSize: "40px" }}>
          {data !== null && data.name}{" "}
        </strong>{" "}
        <p style={{ color: "grey" }}>( {data !== null && data.release} )</p>
      </h1>
      <div style={{ display: "inline-block" }}>
        <div style={{ width: "40vw", float: "left", display: "inline-block" }}>
          <img
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            src={data !== null && data.image_url}
            alt="Gambar"
          />
        </div>
        <div
          style={{
            float: "left",
            "font-size": "20px",
            padding: "10px",
            top: 0,
            display: "inline-block",
          }}
        >
          <strong>Genre {data !== null && data.genre}</strong>
          <br />
          <strong>Platform: {data !== null && data.platform}</strong> <br />
          <strong>
            Single Player:{" "}
            {data !== null && data.singlePlayer === 1 ? "Yes" : "No"}
          </strong>
          <br />
          <strong>
            Multi Player:{" "}
            {data !== null && data.multiplayer === 1 ? "Yes" : "No"}
          </strong>
          <br />
        </div>
      </div>
    </section>
  );
};

export default DetailGame;

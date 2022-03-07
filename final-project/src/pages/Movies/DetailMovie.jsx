import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const DetailMovie = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
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
        <strong style={{ fontWeight: "bold", fontSize: "30px" }}>
          {data !== null && data.title}{" "}
        </strong>{" "}
        <p style={{ color: "grey" }}>( {data !== null && data.year} )</p>
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
          <strong>Rating: {data !== null && data.rating}</strong>
          <br />
          <strong>Genre: {data !== null && data.genre} </strong>
          <br />
          <strong>Durasi: {data !== null && data.duration} Menit</strong>
          <br />
          <strong>Review: {data !== null && data.review}</strong>
          <br />
        </div>
      </div>
      <p>
        <strong>Deskripsi : </strong>:{data !== null && data.description}
      </p>
    </section>
  );
};

export default DetailMovie;

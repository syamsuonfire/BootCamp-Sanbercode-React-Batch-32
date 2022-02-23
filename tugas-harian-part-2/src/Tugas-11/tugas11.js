import React, { useState } from "react";
import "./tugas11.css";

const Tugas11 = () => {
  const [dataBuah, setDataBuah] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
  ]);

  const [input, setInput] = useState({
    nama: "",
    hargaTotal: 0,
    beratTotal: 0,
  });

  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleChange = (e) => {
    let typeofValue = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: [typeofValue] });

    // switch (name) {
    //   case "nama":
    //     setInput({ ...input, nama: value });
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    let { nama, hargaTotal, beratTotal } = input;
    let newData = dataBuah;

    if (currentIndex === -1) {
      newData = [
        ...dataBuah,
        {
          nama,
          hargaTotal,
          beratTotal,
        },
      ];
    } else {
      newData[currentIndex] = {
        nama,
        hargaTotal,
        beratTotal,
      };
    }

    setDataBuah(newData);

    setInput({
      nama: "",
      hargaTotal: 0,
      beratTotal: 0,
    });
    setCurrentIndex(-1);
  };

  const handleDelete = (e) => {
    let index = parseInt(e.target.value);

    let deletedItem = dataBuah[index];

    let newData = dataBuah.filter((e) => {
      return e !== deletedItem;
    });

    setDataBuah(newData);
  };

  const handleEdit = (e) => {
    let index = parseInt(e.target.value);
    let editItem = dataBuah[index];
    setInput({
      ...input,
      nama: editItem.nama,
      hargaTotal: editItem.hargaTotal,
      beratTotal: editItem.beratTotal,
    });
    setCurrentIndex(index);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Daftar Harga Buah</h1>
      <table id="tablebuah">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga total</th>
            <th>Berat total</th>
            <th>Harga per Kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataBuah !== null && (
            <>
              {dataBuah.map((res, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{res.nama}</td>
                    <td>{res.hargaTotal}</td>
                    <td>{res.beratTotal} Kg</td>
                    <td>{res.hargaTotal / (res.beratTotal / 1000)}</td>
                    <td>
                      <button onClick={handleEdit} value={index}>
                        edit
                      </button>
                      <button onClick={handleDelete} value={index}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      <br />

      <div className="container-form">
        <form onSubmit={handleSubmit} method="post">
          <label>Nama</label>
          <input
            onChange={handleChange}
            value={input.nama}
            type="text"
            name="nama"
            placeholder="Your name.."
          />

          <label>Harga total</label>
          <input
            onChange={handleChange}
            value={input.hargaTotal}
            type="number"
            name="hargaTotal"
            placeholder=""
          />

          <label>Berat total</label>
          <input
            onChange={handleChange}
            value={input.beratTotal}
            type="number"
            name="beratTotal"
            placeholder=""
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Tugas11;

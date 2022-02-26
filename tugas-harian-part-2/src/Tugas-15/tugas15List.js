import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataMahasiswaContext } from "../context/dataMahasiswaContext";
import "../Tugas-13/tugas13.css";
import { useHistory } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Tugas15List = () => {
  let history = useHistory();
  const { dataMahasiswa, functions, fetchStatus, setFetchStatus } =
    useContext(DataMahasiswaContext);

  const { fetchData, functionDelete, handleText } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (e) => {
    let idPeserta = parseInt(e.currentTarget.value);
    functionDelete(idPeserta);
  };

  const handleEdit = (e) => {
    let idPeserta = parseInt(e.currentTarget.value);
    history.push(`/tugas14/edit/${idPeserta}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Index Score",
      dataIndex: "indexScore",
      key: "indexScore",
    },
    {
      title: "Action",
      key: "action",
      render: (res, index) => (
        <div>
          <button onClick={handleEdit} value={res.id}>
            <EditOutlined />
          </button>
          <button onClick={handleDelete} value={res.id}>
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  const data = dataMahasiswa;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Daftar Nilai Mahasiswa</h1>
      <Link to="/tugas14/create">
        <button>Buat Data Nilai Mahasiswa Baru</button>
      </Link>
      {/* <table id="tablemahasiswa">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataMahasiswa !== null && (
            <>
              {dataMahasiswa.map((res) => {
                return (
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td>{res.course}</td>
                    <td>{res.score}</td>
                    <td>{handleText(res.score)}</td>
                    <td>
                      <button onClick={handleEdit} value={res.id}>
                        edit
                      </button>
                      <button onClick={handleDelete} value={res.id}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table> */}
      <div className="container_table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Tugas15List;

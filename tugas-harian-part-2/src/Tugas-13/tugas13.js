import React from "react";
import { DataMahasiswaProvider } from "./dataMahasiswaContext";
import DataMahasiswaList from "./dataMahasiswaList";

const Tugas13 = () => {
  return (
    <DataMahasiswaProvider>
      <DataMahasiswaList />
    </DataMahasiswaProvider>
  );
};

export default Tugas13;

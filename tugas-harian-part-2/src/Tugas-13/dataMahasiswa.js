import React from "react";
import { DataMahasiswaProvider } from "./dataMahasiswaContext";
import DataMahasiswaList from "./dataMahasiswaList";

const DataMahasiswa = () => {
  return (
    <DataMahasiswaProvider>
      <DataMahasiswaList />
    </DataMahasiswaProvider>
  );
};

export default DataMahasiswa;

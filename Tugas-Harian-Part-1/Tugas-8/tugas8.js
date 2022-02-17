/*
 * Soal 1 ( Membuat Function dengan rumus )
 */
let panjang = 12;
let lebar = 4;
let tinggi = 8;

/*
 * Jawaban Soal 1
 */
const luasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar;
  //function
};

const kelilingPersegiPanjang = (panjang, lebar) => {
  return 2 * (panjang + lebar);
  //function
};

const volumeBalok = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
console.log("Luas Persegi Panjang = " + HasilluasPersegiPanjang);

let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
console.log("Keliling Persegi Panjang = " + HasilkelilingPersegiPanjang);

let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log("Volume Balok = " + HasilvolumeBalok);

/*
 * Soal 2 ( Membuat Function return String + rest parameter )
 */
const introduce = (...param) => {
  let [name, age, gender, job] = param;

  let prefix = "undefined";

  if (gender.toLowerCase() === "laki-laki") {
    prefix = "Pak";
  }
  return `${prefix} ${name} adalah seorang ${job} yang berusia ${age} tahun `;
};
/*
 * Jawaban Soal 2
 */
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan);

/*
 * Soal 3 ( mengubah array menjadi object )
 */
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {};
/*
 * Jawaban Soal 3
 */

function arrayToObject(arr) {
  var temp = {
    name: arr[0],
    gender: arr[1],
    hobby: arr[2],
    year: arr[3],
  };
  return temp;
}
objDaftarPeserta = arrayToObject(arrayDaftarPeserta);
console.log(objDaftarPeserta);

/*
 * Soal 4 ( Membuat sebuah array of object dan melakukan filter )
 */
var buah = [
  { nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000 },
  { nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000 },
];
/*
 * Jawaban Soal 4
 */
var arrayBuahFilter = buah.filter((item) => {
  return item.adaBijinya != true;
});
console.log(arrayBuahFilter);

/*
 * Soal 5 ( Destructuring pada Object )
 */
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};
/*
 * Jawaban Soal 5
 */
let {
  brand: phoneBrand,
  name: phoneName,
  year,
  colors: colorBlack,
  colors: colorBronze,
} = phone;

console.log(phoneBrand, phoneName, year, colorBlack[2], colorBronze[0]);

/*
 * Soal 6 ( Spred Operator pada Object )
 */
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};
/*
 * Jawaban Soal 6
 */
warna.unshift(buku.warnaSampul[0]);
let newBuku = {
  ...buku,
  warnaSampul: warna,
  ...dataBukuTambahan,
};
console.log(newBuku);

/*
 * Soal 7 (  membuat function yang mengisi data kedalam array kosong )
 */
const tambahDataFilm = (nama, durasi, genre, tahun) => {
  let obj = {
    nama,
    durasi,
    genre,
    tahun,
  };
  return dataFilm.push(obj);
};
/*
 * Jawaban Soal 7
 */
let dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);
